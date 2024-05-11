import { Card } from "react-bootstrap"

function ProductCard({name, price, slug}) {
    return (
        <Card className="m-3">
            <Card.Body>
                <Card.Title>
                    {slug} {name} - R$ {price}
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export { ProductCard }