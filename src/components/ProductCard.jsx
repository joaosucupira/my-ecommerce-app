import { Card, Container } from "react-bootstrap"
import { ListCategories } from "./ListCategories";

function ProductCard({id, name, price, slug, path}) {
    return (
        <>
            <a href="/product">
                <Container>
                    <Card className="m-1 mt-3 p-4">
                        <Card.Img variant="top" src={path} alt="icons"/>
                        <Card.Body>
                            <Card.Title>{id} - {name}</Card.Title>
                            <Card.Text>
                                <p>{price}</p>
                                <br/>
                                <p>
                                    <ListCategories productId={id}/>
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </a>
        </>
    );
}

export { ProductCard }
