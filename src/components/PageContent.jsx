import { Col, Container, Row } from "react-bootstrap";

function PageContent({children}){
    return(
        <>
            <Container className="m-4">
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