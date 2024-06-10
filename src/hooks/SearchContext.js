import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const [filteredProducts, setFilteredProductsState] = useState(() => {
        const saved = sessionStorage.getItem('filteredProducts');
        return saved ? JSON.parse(saved) : [];
    });

    function setFilteredProducts(products) {
        setFilteredProductsState(products);
        sessionStorage.setItem('filteredProducts', JSON.stringify(products));
    }

    return (
        <SearchContext.Provider value={{ filteredProducts, setFilteredProducts}}>
            {children}
        </SearchContext.Provider>
    );
};