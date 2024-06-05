import { Card, Col, Container, Row } from "react-bootstrap"
import { ListCategories } from "./ListCategories";
import "../assets/css/ProductCard.css";

function ProductCard({id, name, price, slug, path}) {
    return (
        <>
            <a href="/product" style={{textDecoration:"none", color:"black"}}>
                <Container fluid >
                    {/* <Card className="m-1 mt-3 p-4">
                        <Card.Img variant="top" src={path} alt="icons"/>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <p>{price}</p>
                                <br/>
                                <p>
                                    <ListCategories productId={id}/>
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card> */}
                    <Row className="align-items-center">
                        <Col>
                            <Container className="img-container p-5">
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
