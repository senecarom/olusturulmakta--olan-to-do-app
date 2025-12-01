import { useLocation } from "react-router-dom"
import styles from "./PageTitle.module.css"
import translations from "../../utils/translations"
import { useLanguage } from "../../contexts/LanguageContext"

const PageTitle = () => {


    const { language } = useLanguage()
    const t = translations[language]
    const location = useLocation()

    const getPageTitle = () => {
        switch (location.pathname) {
            case "/today":
                return t.today
            case "/tomorrow":
                return t.tomorrow
            case "/this-week":
                return t.thisWeek
            case "/this-month":
                return t.thisMonth
            default:
                return t.today
        }
    }


    return (
        <div className={styles.pageTitle}>
            {getPageTitle()} {t.tasks}
        </div>
    )
}

export default PageTitle