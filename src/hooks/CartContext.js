import { createContext, useEffect, useState } from "react"
import api from "../_service/api";

export const CartContext = createContext();

function CartContextProvider({children}) {
    const [listCart, setListCart] = useState([]); // List cart is empty array.

    useEffect(() => {
        //
    }, []);

    function getProducts(){ return listCart; }

    function storeProducts(list) { setListCart(list); } 

    const addCart = async (product) => {
        setListCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) {
                return prevCart.map((item) => 
                    item.id === product.id
                        ? {...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }

        });
    };

    async function rmvProduct(productId) {
        setListCart((prevCart) =>
            prevCart.filter((product) => product.id !== productId));
    }

    async function checkout() {
        try {
            const response = await api.post("/orders", {
                products: listCart,
            });
            console.log(response.data);
            setListCart([]); // clear cart
        } catch (error) {
            Notification.error("Trouble cheking out.");
            console.log(error);
        }
    }

    return(
        <CartContext.Provider
            value={{ listCart, getProducts, storeProducts, addCart, rmvProduct, checkout}}
        >
            {children}
        </CartContext.Provider>
    )
}

export { CartContextProvider };