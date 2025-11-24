import { createContext, useState , useContext } from "react";



const ThemeContext = createContext("light")


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((prevTheme) => { return prevTheme === "light" ? "dark" : "light" })
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme = () => { return useContext(ThemeContext) }