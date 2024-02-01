import NextButton from "./NextButton";
import Options from "./Options";
import Progress from "./Progress";

function Question({
  question,
  numQuestions,
  index,
  dispatch,
  answer,
  points,
  maxPossiblePoints,
}) {
  return (
    <div>
      <Progress
        index={index}
        numQuestions={numQuestions}
        points={points}
        maxPossiblePoints={maxPossiblePoints}
        answer={answer}
      />
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
      <NextButton
        dispatch={dispatch}
        answer={answer}
        index={index}
        numQuestions={numQuestions}
      />
    </div>
  );
}

export default Question;
