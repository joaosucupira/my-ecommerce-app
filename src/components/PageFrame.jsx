import React, { useState } from "react";
import { Container, Navbar, Nav, Row, Col, Form, InputGroup, FormControl, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "react-bootstrap";
import { PageTitle } from "./PageTitle";
// import { Link } from "react-router-dom";
import { PageContent } from "./PageContent";
import { LoginManager } from "./LoginManager";
import { SearchBar } from "./SearchBar";
import "../assets/css/PageFrame.css"
import { OrdersManager } from "./OrdersManager";
import { CartManager } from "./CartManager";
// import HomeContent from "./HomeContent";

function PageFrame(props) {

  // Search bar

  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  }

  return (
    // NAVBAR
    <Container fluid>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>

          <Navbar.Brand className="site-name" href="/">MY ECOMMERCE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="me-auto">
              <Nav.Link href="/">HOME PAGE</Nav.Link>

            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse>
            <SearchBar/>
          </Navbar.Collapse>
          <Navbar.Text>
            <div>
                <Row>
                    <Col >
                        <Dropdown >
                            <DropdownToggle variant="info" id="dropdown-basic" className="fw-bold">
                                Navigate
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/login">
                                  <LoginManager/>
                                </DropdownItem>
                                <hr />
                                {/* <DropdownItem href="/cart">Cart</DropdownItem> */}
                                {/* <DropdownItem href="/orders">Orders</DropdownItem> */}
                                <DropdownItem>
                                  <CartManager/>
                                </DropdownItem>
                                <DropdownItem>
                                  <OrdersManager/>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col><PageTitle name={props.pageTitle}/></Col>
                </Row>
            </div>
          </Navbar.Text>
        </Container>
      </Navbar>
    {/* PAGE CONTENT */}

      <Container>
        <PageContent children={props.content}/>
      </Container>
      <footer className="footer mt-auto py-3 bg-light">
        <Container>
          <span className="text-muted justify-content-center d-flex">© 2024 My Ecommerce</span>
        </Container>
      </footer>
    </Container>
  );
}

export { PageFrame };
