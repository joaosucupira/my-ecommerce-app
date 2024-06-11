import { useContext, useEffect, useState } from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";
// import { CarrinhoContext } from "../hooks/CarrinhoContext";

function LoginManager() 
{
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  // const [cartQuantity, setCartQuantity] = useState(0);
  // const { listCart } = useContext(CarrinhoContext); // replace for actual cart context

  // useEffect(() => {
  //   const quantity = listCart.length;
  //   setCartQuantity(quantity);
  // }, [listCart]);

  useEffect(() => {
    getLocalStorageData();
  }, []);

  function getLocalStorageData() {
    const token = localStorage.getItem("token");
    // const userName = localStorage.getItem("userName");
    const userName = localStorage.getItem("username");
    // const userEmail = localStorage.getItem("userEmail");
    const userEmail = localStorage.getItem("useremail");
    setToken(token);
    setUsername(userName);
    setUserEmail(userEmail);
  }

  function rmvLocalStorageData() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");
    getLocalStorageData();
  }

  if (!token) {
    return (
      <Row>
        <Col md={12}>
          <a href="/login">
            <Button variant="primary">Login</Button>{" "}
          </a>
        </Col>
      </Row>
    );
  }

  return (
    <Row>
      <Col md={7}>
        <p className="fa fa-user"> {username}</p>
        <p className="fa fa-at"> {userEmail}</p>
        <Button variant="danger" onClick={() => rmvLocalStorageData()}>
          <p>Log out</p>
        </Button>{" "}
      </Col>
    </Row>
  );
}

export { LoginManager };