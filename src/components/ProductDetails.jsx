import { useParams } from "react-router-dom";
import { ProductContext, ProductProvider } from "../hooks/ProductContext";
import api from "../_service/api";
import { useContext, useEffect } from "react";

function ProductDetails() {

    const { selectedProduct, setSelectedProduct } = useContext(ProductContext);

    console.log(selectedProduct);


    return (
        <>
            <h1>Product details here.</h1>
            <img src={selectedProduct.path}/>
            <p>{selectedProduct.name}</p>
            <p>{selectedProduct.price}</p>
        </>
    );
}

export {ProductDetails};