import logo from './logo.svg';
import './App.css';
import { RouterApp } from './route';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { SearchProvider } from './hooks/SearchContext';
import { ProductProvider } from './hooks/ProductContext';
import { CartContextProvider } from './hooks/CartContext';

function App() {
  return (
    <>
      <CartContextProvider>
        <ProductProvider>
          <SearchProvider>
              <ToastContainer/>
                <RouterApp/>          
          </SearchProvider>
        </ProductProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
