import logo from './logo.svg';
import './App.css';
import { RouterApp } from './route';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CarrinhoContextProvider from './hooks/CarrinhoContext';

function App() {
  return (
    <>
    <CarrinhoContextProvider>
    <ToastContainer/>
        <RouterApp/>
    </CarrinhoContextProvider>

    </>
  );
}

export default App;
