import { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
      {toggle && <Posts />}
    </>
  );
}

export default App;
