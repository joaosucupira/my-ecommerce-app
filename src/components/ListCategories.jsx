import { useEffect, useState } from "react";
import api from "../_service/api";
import { Col, Row } from "react-bootstrap";
import Notification from "./Notification";

function ListCategories({ productId }) {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        searchCategory();
    }, [productId]);

    console.log(`${productId}`);

    async function searchCategory() {
        try {
            const id = productId;
            const response = await api.get(`/products/${id}/categories`);
            console.log(response.data);
            setCategory(response.data);

        } catch (error) {
            const id = productId;
            Notification.error(`Error getting category from id ${id}`);
        }
    }

    return (
        <>
            <Row>
                {categories.map((category) => {
                    return(
                        <Col key={category.id}>
                            <p>{category.name}</p>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export {ListCategories};