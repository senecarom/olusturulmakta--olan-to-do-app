import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";



const TasksDataContext = createContext()





const TasksDataProvider = (children) => {
    

    const tasksDataReducer = (state, action) => {
        switch (action) {
            case "ADD_TASK_DATA":
                return [
                    ...state,
                    {
                        id: uuidv4,
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


    const init = (initArg)=>{
        if(localStorage.getItem("tasksData")){
            localStorage.setItem("tasksData" , JSON.stringify(initArg))
        }
        return localStorage.getItem("tasksData")
    }

    const [tasksData, dispatch] = useReducer(tasksDataReducer, [], init)

    return (
        <TasksDataContext.Provider>
            {children}
        </TasksDataContext.Provider>
    )
}

export {dispatch} 