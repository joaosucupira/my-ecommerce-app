import { Card } from "react-bootstrap"

function ProductCard({name, price, slug}) {
    return (
        <a href="/product">
        <Card className="m-3">
            <Card.Body>
                <Card.Title>
                    {slug} {name} - R$ {price}
                </Card.Title>
            </Card.Body>
        </Card>
        </a>
    )
}

export { ProductCard }