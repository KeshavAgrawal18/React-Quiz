import React from "react";

function Options({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  const { correctOption, options } = question;
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${
            hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""
          } ${hasAnswered && index === answer ? "answer" : ""}`}
          disabled={hasAnswered}
          key={option}
          onClick={() =>
            dispatch({
              type: "newanswer",
              payload: index,
            })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
