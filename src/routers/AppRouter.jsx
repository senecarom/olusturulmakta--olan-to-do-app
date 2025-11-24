import { Route, Routes } from "react-router-dom"
import MainLayout from "../components/layouts/MainLayout"
import Today from "../pages/Today"
import Tomorrow from "../pages/Tomorrow"
import ThisWeek from "../pages/ThisWeek"
import ThisMonth from "../pages/ThisMonth"
import { ThemeProvider } from "../contexts/ThemeContext"
import { LanguageProvider } from "../contexts/LanguageContext"

const AppRouter = () => {


    return (
        <ThemeProvider>
            <LanguageProvider>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="today" element={<Today />} />
                    <Route path="tomorrow" element={<Tomorrow />} />
                    <Route path="this-week" element={<ThisWeek />} />
                    <Route path="this-month" element={<ThisMonth />} />
                </Route>
            </Routes>
            </LanguageProvider>
        </ThemeProvider>
    )
}

export default AppRouter