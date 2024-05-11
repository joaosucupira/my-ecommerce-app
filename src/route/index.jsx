import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from "../pages/Product";


function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export {RouterApp}