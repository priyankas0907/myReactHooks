import React from "react";
import "./App.css";
import UseEffectClassDemo from "./useFFDEmo/UseEffectClassDemo";
import ContextDemo from "./useContextDemo/ContextDemo";
import { ThemeProvider } from "./utils/ThemeContext";
import { CountContextProvider } from "./utils/CountContext";
import DomRef from "./useRefDemo/DomRef";
import PersistStateExample from "./useRefDemo/PersistStateExample";

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
        <CountContextProvider>
          <ContextDemo />
        </CountContextProvider>
      </ThemeProvider>
      <DomRef />
      <br></br>
      <PersistStateExample />
      {/* <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button>+</button> */}
    </>
  );
}

export default App;
