import React, {  useContext } from "react"
import { ThemeContext } from "./context/ThemeContext";
import "./App.css"


function App() {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <div className={`app ${theme}`}>
        <div>
          {`Current Theme : ${theme}`}
        </div>
        <button onClick={toggleTheme}>
          Change Theme
        </button>
      </div>
    </>
  );
}

export default App;
