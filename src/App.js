import logo from './logo.svg';
import './App.css';
import { RouterApp } from './route';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CarrinhoContextProvider from './hooks/CarrinhoContext';
import { SearchProvider } from './hooks/SearchContext';

function App() {
  return (
    <>
      <SearchProvider>
        <CarrinhoContextProvider>
          <ToastContainer/>
              <RouterApp/>
        </CarrinhoContextProvider>
      </SearchProvider>

    </>
  );
}

export default App;
