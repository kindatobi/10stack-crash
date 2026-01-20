import { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostById from "./components/PostById";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
      {toggle && <Posts />}
      <PostById id={3} />
    </>
  );
}

export default App;
