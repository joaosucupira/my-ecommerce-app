import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Product } from "../pages/Product";
// import { PageFrame } from "../components/PageFrame";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { CartPage } from "../pages/CartPage";
import { OrdersPage } from "../pages/OrdersPage";
import { ProductPage } from "../pages/ProductPage";



function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/orders" element={<OrdersPage/>}/>
                <Route path="/product" element={<ProductPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export {RouterApp}