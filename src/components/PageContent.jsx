import { Col, Container, Row } from "react-bootstrap";

function PageContent({children}){
    return(
        <>
            <Container className="m-4">
                <Row>
                    <Col>
                        <center>
                            <h1  className="m-3">Page content</h1>
                        </center>
                    </Col>
                </Row>
                <Row>
                    <div>
                        {children}
                    </div>
                </Row>
            </Container>
        </>
    );
}

export { PageContent }