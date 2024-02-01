function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  let percentage = (points * 100) / maxPossiblePoints;
  let emoji;
  if (percentage === 100) emoji = "🏅";
  if (percentage < 100 && percentage >= 80) emoji = "🎉";
  if (percentage < 80 && percentage >= 50) emoji = "🙃";
  if (percentage < 50 && percentage > 0) emoji = "🤨";
  if (percentage === 0) emoji = "🤦";

  return (
    <>
      <div className="result">
        <p>
          {emoji} You scored {points} out of {maxPossiblePoints} ({" "}
          {Math.ceil(percentage)}% )
        </p>
      </div>
      <div className="highscore">( Highscore {highscore} points ) </div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
