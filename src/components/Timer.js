import React, { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  useEffect(() => {
    const id = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => clearInterval(id);
  });
  return (
    <div className="timer">
      0{Math.floor(secondsRemaining / 60)}:
      {secondsRemaining % 60 > 9
        ? secondsRemaining % 60
        : "0" + (secondsRemaining % 60)}
      {/* {secondsRemaining} */}
    </div>
  );
}

export default Timer;
