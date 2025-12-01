import { useLanguage } from "../../contexts/LanguageContext"
import translations from "../../utils/translations"
import styles from "./TaskColumn.module.css"

const TaskColumn = () => {

    const { language } = useLanguage()
    const t = translations[language]

    return (
        <div className={styles.taskColumn}>
            <div className={styles.taskColumnTitle}>
                <p></p>
            </div>

            <div className={styles.taskCardsContainer}>
                <div className="taskCard"></div>
            </div>
        </div>
    )
}

export default TaskColumn