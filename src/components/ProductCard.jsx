import { Card, Col, Container, Row } from "react-bootstrap"
import { ListCategories } from "./ListCategories";
import "../assets/css/ProductCard.css";
import { useContext } from "react";
import { ProductContext } from "../hooks/ProductContext";
import { useNavigate } from "react-router-dom";

function ProductCard({id, name, price, slug, path}) {

    const { setSelectedProduct } = useContext(ProductContext);
    const navigate = useNavigate();
    function generateProductURL(slug) {
        return `/product?slug=${slug}&ref=nb_sb_ss_recent_2_0_recent`;
    }

    function handleProductClick() {
        const product = {id, name, price, slug, path};
        setSelectedProduct(product);
        const url = generateProductURL(slug);
        navigate(url);
    }
    return (
        <>
            <Container fluid 
            className="product-container"
            onClick={handleProductClick} >
                <Row className="align-items-center">
                    <Col>
                        <Container className="img-container p-4">
                            <img src={path} alt="Product" className="img-display" />
                        </Container>
                    </Col>
                    <Col>
                        <div>
                            <ListCategories productId={id} />
                            <h4>{name}</h4>
                            <p>R$ {price}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export { ProductCard }
