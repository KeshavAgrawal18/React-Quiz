import React from "react";

function StartScreen({ numQuestions, dispatch, category }) {
  return (
    <div className="app">
      <h2>Welcome to The {category} Quiz!</h2>
      <h3>
        {numQuestions} questions to test your {category} Mastery
      </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
