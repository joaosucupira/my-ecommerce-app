import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import api from "../_service/api";
import { ProductCard } from "./ProductCard";
import Notification from "./Notification";

function Product() {
    const [products, setProduct] = useState([]);
    
    useEffect(() => {
        searchProduct();
    }, []);

    async function searchProduct() {
        try {
            const response = await api.get("/products");
            setProduct(response.data);
            // console.log(response.data);


        } catch (error) {
            Notification.error('Trouble getting products.');
        }
    }



    return (
        <>
            <Row>
                {products.map((product) => (
                    <Col key={product.id}>
                        
                        <ProductCard
                        id={product.id} 
                        name={product.name}
                        price={product.price}
                        slug={product.slug}
                        path={product.path}
                        />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export { Product };
