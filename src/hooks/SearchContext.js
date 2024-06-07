import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    return (
        <SearchContext.Provider value={{ filteredProducts, setFilteredProducts}}>
            {children}
        </SearchContext.Provider>
    );
};