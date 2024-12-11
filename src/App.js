import React from "react";
import "./App.css";
import UseEffectClassDemo from "./useFFDEmo/UseEffectClassDemo";
import ContextDemo from "./useContextDemo/ContextDemo";
import { ThemeProvider } from "./utils/ThemeContext";

function App() {
  // function countInitial() {
  //   console.log('run function');
  //   return 4;
  // }
  // const [count, setCount] = useState(countInitial()); ---runs on every render.

  // const [count, setCount] = useState(()=>{
  //   console.log('run function');
  //   return 4;
  // });

  // function decrement() {
  //   setCount(prevCount => prevCount- 1);
  //   setCount(prevCount => prevCount- 1);
  // }
  return (
    <>
      <ThemeProvider>
        <UseEffectClassDemo name="abc" />
        <ContextDemo />
      </ThemeProvider>
      {/* <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button>+</button> */}
    </>
  );
}

export default App;
