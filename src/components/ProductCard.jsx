import { Card, Col, Container, Row } from "react-bootstrap"
import { ListCategories } from "./ListCategories";
import "../assets/css/ProductCard.css";

function ProductCard({id, name, price, slug, path}) {
    return (
        <>
            <a href="/product" style={{textDecoration:"none", color:"black"}}>
                <Container fluid className="product-container" >
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
            </a>
        </>
    );
}

export { ProductCard }
