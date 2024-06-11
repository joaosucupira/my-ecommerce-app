import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function OrdersManager() {
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
        (token ? navigate('/orders') : navigate('/login'));
    }

    return (
        <Row>
            <Col md={12}>
                <a
                style={{textDecoration:'none'}} 
                href="#" 
                onClick={handleOrdersClick}>
                    <p>Orders</p>
                </a>
            </Col>
        </Row>
    );
}
export {OrdersManager};