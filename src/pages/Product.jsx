import { Col, Row } from "react-bootstrap";
import api from "../_service/api";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

function Product(){
    const [products, setProduct] = useState([]);
    
    useEffect(() => {
        searchProduct();
    }, []);

    async function searchProduct(){
        try {
            const response = await api.get("/product");
            setProduct(response.data);
            console.log(response.data);
        } catch(error) {
            alert('Erro.');
        }
    }

    return(
        <>
            <Row>
                <center>
                    <h1>PRODUCT PAGE</h1>
                    <Row>
                        {products.map((product) => {
                            return(
                                <Col>
                                    <ProductCard
                                    name={product.name}
                                    price={product.price}
                                    slug={product.slug}
                                    />
                                </Col>
                            )
                        })}
                    </Row>

                </center>        
            </Row>
        </>
    );
}

export { Product }