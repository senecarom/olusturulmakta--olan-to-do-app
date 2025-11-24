import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";
import { useTheme } from "../../../../contexts/ThemeContext";
import { useLanguage } from "../../../../contexts/LanguageContext";
import translations from "../../../../utils/translations";

const Header = () => {

    const { theme, toggleTheme } = useTheme()
    const { language, toggleLanguage } = useLanguage()
    const t = translations[language]

    const navLinks = [
        { label: t.today, path: "/today" },
        { label: t.tomorrow, path: "/tomorrow" },
        { label: t.thisWeek, path: "/this-week" },
        { label: t.thisMonth, path: "/this-month" }
    ]

    return (
        <header className={styles.header}>

            <div className={styles.container}>
                <nav className={styles.nav}>
                    {navLinks.map((link) => {
                        return (<NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => {
                                return isActive ? `${styles.link} ${styles.active}` : styles.link
                            }}
                        >
                            {link.label}
                        </NavLink>
                        )
                    })}
                </nav>

                <div className={styles.controllers}>
                    <button className={styles.controlButton} onClick={toggleTheme}>
                        {theme === "light" ? <FaMoon /> : <FaSun />}
                    </button>
                    <button className={styles.controlButton} onClick={toggleLanguage}>
                        <FaGlobe />
                        <span>{language === "TR" ? "EN" : "TR"}</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header