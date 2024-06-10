import React, { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProductState] = useState(() => {
    const saved = sessionStorage.getItem('selectedProduct');
    return saved ? JSON.parse(saved) : [];
  });

  function setSelectedProduct(product) {
    setSelectedProductState(product);
    sessionStorage.setItem('selectedProduct', JSON.stringify(product));
  }

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
