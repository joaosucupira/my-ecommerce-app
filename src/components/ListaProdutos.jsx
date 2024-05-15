import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../_service/api";
import { ProductCard } from "./ProductCard";
// import { Product } from "../pages/Product";
// import api from "../_service/api";
// import { CardProduto } from "./CardProduto";


function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    try {
      const response = await api.get("/products");
      console.log({response})
      setProdutos(response.data);
    } catch (error) {
      mensagemDeErro("Erro para buscar os produtos.");
    }
  }

  function mensagemDeErro(mensagem = "Mensagem de erro") {
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

  return (
    <>
      <Row className="justify-content-md-center">
        <Col md={4} className="m-5">
          <center><h1>Produtos em destaque</h1></center>
        </Col>
      </Row>
      <Row>
        {produtos.map((produto, index) => {
          return (
          
            <Col md={3} key={index}>
              <ProductCard    
                name={produto.name}
                price={produto.price}
                path={produto.path}
              />
            </Col>
            
          );
        })}
      </Row>
    </>
  );
}

export { ListaProdutos };