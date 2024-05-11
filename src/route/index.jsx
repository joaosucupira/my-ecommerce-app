import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from "../pages/Product";
import { PageFrame } from "../components/PageFrame";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";



function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export {RouterApp}