import { BrowserRouter, Routes, Route } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PrivateLayout from "../layouts/PrivateLayout";
import Favorites from "../pages/Favorites";
import TodosWithUse from "../pages/TodosWithUse";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/" element={<PrivateLayout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="todos" element={<TodosWithUse />} />
                    <Route path="favorites" element={<Favorites />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes