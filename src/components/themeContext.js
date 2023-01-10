import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('')
  return (
    <ThemeContext.Provider
    value={{
      theme,
      setTheme
    }}
    >
    {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => { 
  const theme = useContext(ThemeContext)
  return theme
}