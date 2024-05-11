import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { PageTitle } from "./PageTitle";

function PageFrame(props) {
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
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
                    <Col><PageTitle name={props.pageTitle1}/></Col>
                    <Col><PageTitle name={props.pageTitle2}/></Col>
                </Row>
            </div>
          </Navbar.Text>
        </Container>
      </Navbar>
      <Container>

        {/* MAIS CONTEÚDO */}
      </Container>
      <footer className="footer mt-auto py-3 bg-light">
        <Container>
          <span className="text-muted">© 2024 My Ecommerce</span>
        </Container>
      </footer>
    </Container>
  );
}

export { PageFrame };
