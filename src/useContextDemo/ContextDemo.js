import React from "react";
import { useTheme, useThemeUpdate } from "../utils/ThemeContext";
import { useCount } from "../utils/CountContext";

const ContextDemo = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const { count, incrementCount } = useCount();
  return (
    <>
      <h1>{darkTheme ? "dark" : "light"}</h1>;
      <button onClick={toggleTheme}>toggle</button>
      <br></br>
      <h2>{count}</h2>
      <button onClick={incrementCount}>incrementCount</button>
    </>
  );
};

export default ContextDemo;
