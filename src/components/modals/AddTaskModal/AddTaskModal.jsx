import { useState } from "react"
import { useLanguage } from "../../../contexts/LanguageContext"
import { useTasksData } from "../../../contexts/TasksDataContext"
import translations from "../../../utils/translations"
import { FaTimes } from "react-icons/fa";



const AddTaskModal = ({ isAddTaskModalOpen, onClose }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { dispatch } = useTasksData()
    const { language } = useLanguage()
    const t = translations[language]


    const handleSubmit = (e) => {

        e.preventDefault()
        if (!title.trim() && !description.trim()) {
            setTitle("")
            setDescription("")
            return
        }

        dispatch(
            {
                type: "ADD_TASK_DATA",
                payload: { title: title, description: description }
            }
        )
        setTitle("")
        setDescription("")
        onclose()
    }

    if (!isAddTaskModalOpen) {
        return
    }

    return (
        <div className="modalOverlay">
            <div className="add-task-modal">

                <button className="close" onClick={onClose}>
                    <FaTimes />
                </button>

                <h2 className="title">
                    {t.addTaskModalTitle}
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="taskTitle">
                            {t.addTaskModalTaskTitle}
                        </label>
                        <input
                            placeholder={t.addTaskModalTaskTitlePlaceholder}
                            id="taskTitle"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="taskDescription">
                            {t.addTaskModalTaskDescription}
                        </label>
                        <textarea
                            id="taskDescription"
                            type="text"
                            placeholder={t.addTaskModalTaskDescriptionPlaceholder}
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                        >
                        </textarea>
                    </div>

                    <div className="button-group">
                        <button onClick={onClose}>{t.cancel}</button>
                        <button>{t.save}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTaskModal