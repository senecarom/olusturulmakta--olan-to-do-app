import { createContext, useContext, useState } from "react";


const TaskModalsContext = createContext("")

export const TaskModalProvider = ({ children }) => {

    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false)
    const openAddModal = () => {
        setIsAddTaskModalOpen(true)
    }
    const closeAddModal = () => {
        setIsAddTaskModalOpen(false)
    }

    return (
        <TaskModalsContext.Provider value={{
            isAddTaskModalOpen,
            openAddModal,
            closeAddModal
        }}>
            {children}
        </TaskModalsContext.Provider>
    )

}


export const useTaskModals = () => { return useContext(TaskModalsContext) }