import { useState } from "react";
import WideButton from "./WideButton";

function Home({ setCategory }) {
  const [listType, setListType] = useState(null);
  return (
    <>
      <h1>The Quiz mania</h1>
      <h2>Select the category</h2>
      <br />
      {listType === null && (
        <>
          <WideButton setCategory={setListType} category="Mathematics" />
          <WideButton setCategory={setListType} category="Programming" />
          <WideButton setCategory={setListType} category="Sports" />
        </>
      )}
      {listType === "Programming" && (
        <>
          <WideButton setCategory={setCategory} category="HTML" />
          <WideButton setCategory={setCategory} category="React" />
          <WideButton setCategory={setCategory} category="C++" />
          <WideButton setCategory={setCategory} category="Python" />
          <WideButton setCategory={setCategory} category="Java" />
        </>
      )}
      {listType === "Sports" && (
        <>
          <WideButton setCategory={setCategory} category="Football" />
          <WideButton setCategory={setCategory} category="Cricket" />
        </>
      )}
      {listType === "Mathematics" && (
        <>
          <WideButton setCategory={setCategory} category="Number System" />
        </>
      )}
    </>
  );
}

export default Home;
