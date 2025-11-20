import { Outlet } from "react-router-dom"
import Header from "../Header/Header"

const MainLayout = () => {



    return (
        <div className="mainLayout">
            <Header />
            <main className="main">
                <Outlet/>
            </main>
        </div>
    )
}

export default MainLayout