import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CartManager() {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);

    useEffect(() => {
        getLocalStorageData();
    }, []);

    function getLocalStorageData() {
        const token = localStorage.getItem('token');
        setToken(token);
    }

    function handleOrdersClick() {
        (token ? navigate('/cart') : navigate('/login'));
    }

    return (
        <Row>
            <Col md={12}>
                <a
                style={{textDecoration:'none'}} 
                href="#" 
                onClick={handleOrdersClick}>
                    <p>Cart</p>
                </a>
            </Col>
        </Row>
    );
}
export {CartManager};