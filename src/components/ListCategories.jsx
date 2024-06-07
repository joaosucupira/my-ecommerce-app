import { useEffect, useState } from "react";
import api from "../_service/api";
import { Col, Row, Badge, Container } from "react-bootstrap";
import Notification from "./Notification";
import "../assets/css/ListCategories.css";

function ListCategories({ productId }) {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        searchCategory();
    }, [productId]);

    // console.log(`${productId}`);

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
            <Col className="category-row">
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <Row key={category.id} className="category-col">
                            <Badge pill bg="" className="category-badge">
                                <p className="category-text">{category.name}</p>
                            </Badge>
                        </Row>
                    ))
                ) : (
                    <p>No categories available.</p>
                )}
            </Col>
        </>
    );
}

export {ListCategories};