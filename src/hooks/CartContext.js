import { createContext, useEffect, useState } from "react"


export const CartContext = createContext();

function CartContextProvider({children}) {
    const [listCart, setListCart] = useState([]); // List cart is empty array.

    useEffect(() => {
        // TODO
    }, []);

    function getProducts() {} // TODO

    function storeProducts(list) {} // TODO

    const addCart = async (product) => {} // TODO

    function rmvProduct(productId) {} // TODO

    return(
        <CartContext.Provider
            value={{ listCart, addCart, rmvProduct}}
        >
            {children}
        </CartContext.Provider>
    )
}

