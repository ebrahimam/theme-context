import React, { createContext, useState } from "react"

//create a context 
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
      //theme state 
      const [theme, setTheme] = useState("light")

      const toggleTheme = () => {
            setTheme((prev) => (prev === 'light' ? "dark" : "light"))
      }

      return (
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                  {children}
            </ThemeContext.Provider>
      )

}

