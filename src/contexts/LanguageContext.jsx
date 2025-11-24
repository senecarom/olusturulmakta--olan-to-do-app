import { Children, createContext, useState , useContext } from "react";




const LanguageContext = createContext("TR")


export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("TR")

    const toggleLanguage = () => {
        setLanguage((prevLang) => { return prevLang === "TR" ? "EN" : "TR" })
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = ()=>{return useContext(LanguageContext)}