


const Today = () => {

    return (
        <div className="pageContainer">
            <PageTitle />

            <div className="columnsContainer">
                <Column />
                <Column />
            </div>

            <FloatingButton />

            <AddTaskModal />
            <EditTaskModal />
        </div>
    )
}

export default Today