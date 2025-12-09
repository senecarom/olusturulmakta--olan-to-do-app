import { createContext, useContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";



const TasksDataContext = createContext()


const tasksDataReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK_DATA":
            return [
                ...state,
                {
                    id: uuidv4(),
                    title: action.payload.title,
                    description: action.payload.description,
                    date: new Date().toISOString().split("T")[0],
                    completed: "uncompleted",
                    color: "default"
                }
            ]

        default:
            break;
    }
}



const init = (initArg) => {
    try {
        const storedTasks = localStorage.getItem("tasksData")
        return (
            storedTasks ?
                JSON.parse(storedTasks) : initArg
        )

    } catch (error) {
        console.error("localStoragedeki veriye erişilemedi", error)
        return initArg
    }
}



export const TasksDataProvider = ({ children }) => {

    const [tasksData, dispatch] = useReducer(tasksDataReducer, [], init)

    useEffect(() => {
        localStorage.setItem("tasksData", JSON.stringify(tasksData))
    }, [tasksData])





    return (
        <TasksDataContext.Provider value={{ dispatch }}>
            {children}
        </TasksDataContext.Provider>
    )
}


export const useTasksData = () => { return useContext(TasksDataContext) }