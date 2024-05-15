import logo from './logo.svg';
import './App.css';
import { RouterApp } from './route';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer/>
      <RouterApp/>
    </>
  );
}

export default App;
