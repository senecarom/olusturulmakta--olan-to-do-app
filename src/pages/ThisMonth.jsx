import PageTitle from "../components/PageTitle/PageTitle"
import TaskColumn from "../components/TaskColumn/TaskColumn"

const ThisMonth = () => {

    return (
        <div className="page-container">
            <PageTitle />
            <div className="columns-container">
                <TaskColumn />
                <TaskColumn />
            </div>

            {/* <FloatingButton />

            <AddTaskModal/>
            <EditTaskModal/> */}

        </div>
    )
}

export default ThisMonth