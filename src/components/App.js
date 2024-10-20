import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Home from "./Home";

function App() {
  const [category, setCategory] = useState(null);
  return (
    <div className="app">
      {category === null && <Home setCategory={setCategory} />}
      {category !== null && (
        <>
          <Header category={category} />
          <Main category={category} />
        </>
      )}
    </div>
  );
}

export default App;
