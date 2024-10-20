function WideButton({ category, setCategory }) {
  return (
    <>
      <button className="btn btn-wide" onClick={() => setCategory(category)}>
        {category}
      </button>
      <br />
    </>
  );
}

export default WideButton;
