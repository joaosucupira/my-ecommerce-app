
import { Card, Container } from "react-bootstrap"

function ProductCard({name, price, slug, path}) {
    return (

        <>
            <a href="/product">
                <Container>
                    <Card className="m-1 mt-3 p-4">
                    {/* <Card.Img variant="top" src="https://placehold.co/600x400" /> */}
                    {/* <Card.Img variant="top" src="{path}" /> */}
                    <Card.Img variant="top" src={path} alt="icons"/>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                {price} <br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </Container>
            </a>
        </>
    );
}

export { ProductCard }