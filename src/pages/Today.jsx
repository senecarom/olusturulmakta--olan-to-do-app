import PageTitle from "../components/PageTitle/PageTitle"
import TaskColumn from "../components/TaskColumn/TaskColumn"
import FloatingButton from "../components/ui/FloatingButton/FloatingButton"
import AddTaskModal from "../components/modals/AddTaskModal/AddTaskModal"

const Today = () => {

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

            <FloatingButton />

            {/* <AddTaskModal /> */}
            {/* <EditTaskModal /> */}
        </div>
    )
}

export default Today