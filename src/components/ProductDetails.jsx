import { useParams } from "react-router-dom";
import { ProductContext, ProductProvider } from "../hooks/ProductContext";
import api from "../_service/api";
import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../hooks/CartContext";

function ProductDetails() {

    const { selectedProduct, setSelectedProduct } = useContext(ProductContext);
    const { addCart } = useContext(CartContext);

    function handleAddToCart() { addCart(selectedProduct); }

    console.log(selectedProduct);


    return (
        <>
            <h1>Product details here.</h1>
            <img src={selectedProduct.path}/>
            <p>{selectedProduct.name}</p>
            <p>{selectedProduct.price}</p>
            <Button
                size="sm"
                variant="success"
                onClick={handleAddToCart} 
                href="/cart"
                >Add to cart</Button>
        </>
    );
}

export {ProductDetails};