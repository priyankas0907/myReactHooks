import React from "react";
import { useTheme, useThemeUpdate } from "../utils/ThemeContext";

const ContextDemo = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  return (
    <>
      <h1>{darkTheme ? "dark" : "light"}</h1>;
      <button onClick={toggleTheme}>toggle</button>
    </>
  );
};

export default ContextDemo;
