import React from "react";
import { Container, Navbar, Nav, Row, Col, InputGroup, FormControl, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "react-bootstrap";
import { PageTitle } from "./PageTitle";
import { Form } from "react-router-dom";
import { PageContent } from "./PageContent";
import HomeContent from "./HomeContent";

function PageFrame(props) {
  return (
    // NAVBAR
    <Container fluid>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>

          <Navbar.Brand href="/">MY ECOMMERCE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="me-auto">
              <Nav.Link href="/">HOME PAGE</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Text>
            <div>
                <Row>
                    <Col>
                        <Dropdown>
                            <DropdownToggle variant="info" id="dropdown-basic">
                                Navigate
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/login">Login</DropdownItem>
                                <hr />
                                <DropdownItem href="#">Cart</DropdownItem>
                                <DropdownItem href="#">Orders</DropdownItem>
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
