import PageTitle from "../components/PageTitle/PageTitle"
import TaskColumn from "../components/TaskColumn/TaskColumn"
import FloatingButton from "../components/ui/FloatingButton/FloatingButton"
import AddTaskModal from "../components/modals/AddTaskModal/AddTaskModal"
import { useTaskModals } from "../contexts/TaskModals"

const Today = () => {

    const {
        openAddModal,
        isAddTaskModalOpen
    } = useTaskModals()
    return (
        <div className="page-container">
            <PageTitle />

            <div className="columns-container">
                <TaskColumn
                    state="nonCompletedTasks"
                />
                <TaskColumn
                    state="completedTasks"
                />
            </div>

            <FloatingButton onAddModalOpen={openAddModal} />

            <AddTaskModal
                isAddTaskModalOpen={isAddTaskModalOpen}
            />
            {/* <EditTaskModal /> */}
        </div>
    )
}

export default Today