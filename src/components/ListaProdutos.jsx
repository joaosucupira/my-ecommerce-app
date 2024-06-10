import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../_service/api";
import { ProductCard } from "./ProductCard";
import Notification from "./Notification";
import "../assets/css/ListaProdutos.css";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    try {
      const response = await api.get("/products");
      setProdutos(response.data);
      // console.log(response.data);
    } catch (error) {
      Notification.error("Trouble getting product data.");
    }
  }

  return (
    <>
      <Row className="justify-content-md-center">
        <Col md={8} className="m-5">
          <center><h1 className="main-title">Product Spotlight</h1></center>
        </Col>
      </Row>
      <Row>
        {produtos.map((produto, index) => {
          return (
          
            <Col md={6} key={index}>
              <ProductCard    
                id={produto.id}
                name={produto.name}
                price={produto.price}
                path={produto.path}
                slug={produto.slug}
              />
            </Col>
            
          );
        })}
      </Row>
    </>
  );
}

export { ListaProdutos };