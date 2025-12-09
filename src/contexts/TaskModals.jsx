import { createContext, useContext, useState } from "react";


const TaskModals = createContext("")

export const TaskModalProvider = ({ children }) => {

    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false)
    const openAddModal = () => {
        setIsAddTaskModalOpen(true)
    }
    const closeAddModal = () => {
        setIsAddTaskModalOpen(false)
    }


    <TaskModal.Provider value={{
        isAddTaskModalOpen,
        openAddModal,
        closeAddModal
    }}>
        {children}
    </TaskModal.Provider>


}


export const useTaskModal = () => { return useContext(TaskModals) }