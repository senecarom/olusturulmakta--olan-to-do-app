import { Route, Routes } from "react-router-dom"
import MainLayout from "../components/layouts/MainLayout"
import Today from "../pages/Today"
import Tomorrow from "../pages/Tomorrow"
import ThisWeek from "../pages/ThisWeek"
import ThisMonth from "../pages/ThisMonth"

const AppRouter = () => {


    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="today" element={<Today/>}/>
                <Route path="tomorrow" element={<Tomorrow/>}/>
                <Route path="this-week" element={<ThisWeek/>}/>
                <Route path="this-month" element={<ThisMonth/>}/>
            </Route>
        </Routes>
    )
}

export default AppRouter