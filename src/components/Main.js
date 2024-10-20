import React, { useEffect, useReducer } from "react";
import Error from "./Error";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Question from "./Question";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";

const SECS_PER_QUESTION = 30;
const API_URL = "http://localhost:8000/api";

const initialState = {
  index: 0,
  points: 0,
  questions: [],
  status: "loading",
  // "loading", "error", "ready", "active", "finished"
  answer: null,
  maxPossiblePoints: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload.questions,
        status: "ready",
        maxPossiblePoints: action.payload.questions.reduce(
          (result, question) => {
            return result + question.points;
          },
          0
        ),
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newanswer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          state.points +
          (question.correctOption === action.payload ? question.points : 0),
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    case "finish":
      state.highscore =
        state.points > state.highscore ? state.points : state.highscore;
      return {
        ...state,
        status: "finished",
      };
    case "restart":
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
        maxPossiblePoints: state.maxPossiblePoints,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action Error");
  }
}

function Main({ category }) {
  const [
    {
      status,
      questions,
      index,
      answer,
      points,
      maxPossiblePoints,
      highscore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  useEffect(() => {
    const fun = async () => {
      try {
        const res = await fetch(`${API_URL}/${category}`);
        const data = await res.json();
        dispatch({
          type: "dataReceived",
          payload: {
            questions: data,
          },
        });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    };
    fun();
  }, [category]);

  const numQuestions = questions.length;
  return (
    <main className="main">
      {status === "error" && <Error />}
      {status === "loading" && <Loader />}
      {status === "ready" && (
        <StartScreen
          numQuestions={numQuestions}
          dispatch={dispatch}
          category={category}
        />
      )}
      {status === "active" && (
        <>
          <Question
            question={questions[index]}
            numQuestions={numQuestions}
            index={index}
            dispatch={dispatch}
            answer={answer}
            points={points}
            maxPossiblePoints={maxPossiblePoints}
          />
          <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
        </>
      )}
      {status === "finished" && (
        <FinishScreen
          points={points}
          maxPossiblePoints={maxPossiblePoints}
          highscore={highscore}
          dispatch={dispatch}
        />
      )}
    </main>
  );
}

export default Main;
