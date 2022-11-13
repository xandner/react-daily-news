import React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./components/home/index"

const AppRoutes=()=>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
)
export default AppRoutes;