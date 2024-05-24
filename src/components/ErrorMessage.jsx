import { toast } from "react-toastify";

function ErrorMessage(props){
  function errorMsg(mensagem = "Mensagem de erro") {
    toast.error(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  return(errorMsg(props.text));
}

  export { ErrorMessage };