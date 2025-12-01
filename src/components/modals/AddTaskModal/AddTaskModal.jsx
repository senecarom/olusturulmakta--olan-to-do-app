import { useLanguage } from "../../../contexts/LanguageContext"
import { dispatch } from "../../../contexts/TasksDataContext"



const AddTaskModal = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { language } = useLanguage()
    const t = translations[language]


    const addTaskData = () => {
        dispatch(
            {
                type: "ADD_TASK_DATA",
                payload: { title: {title} , description: {description} }
            }
        )
    }

    return (
        <div className="add-Task-Column">

            <div className="title">
                {t.addTaskModalTitle}
            </div>

            <div className="form-group">
                <label htmlFor="taskTitle">
                    {t.addTaskModalTaskTitle}
                </label>
                <input
                    placeholder={t.addTaskModalTaskTitlePlaceholder}
                    id="taskTitle"
                    value={title}
                    onchange={(e) => { setTitle(e.target.value) }}
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
                    onChange={(e)=>{setDescription(e.target.value)}}
                >
                </textarea>
            </div>

            <div className="button-group">
                <button>{t.cancel}</button>
                <button onClick={addTaskData}>{t.save}</button>
            </div>
        </div>
    )
}

export default AddTaskModal