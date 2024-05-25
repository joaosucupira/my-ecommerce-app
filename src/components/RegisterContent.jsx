import { useState } from "react";
import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SimpleCard from "./SimpleCard";
import Notification from "./Notification";
import axios from "axios";


function RegisterContent(){
    const [validated, setValidated] = useState(false);
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    let navigate = useNavigate();

    function onchangeUsername(event) { setName(event.target.value); }
    function onchangeEmail(event) { setEmail(event.target.value); }
    function onchangePassword(event) { setPassword(event.target.value); }
    
    async function submitForm(event) {
        event.preventDefault();
        setValidated(true);
        console.log(email, password);

        try {
            const registerRequest = await axios.post(
                "http://localhost:8000/api/register",
                { name, email, password },
                {
                    Headers: {
                      "Content-Type": "application/json"
                    }
                }
            );
            if (registerRequest.status == 201) {
                Notification.success("New user registered successfully");
                navigate("/login");
            }
            
        } catch (error) {
            console.log(error);
            Notification.error("Could not register user.");
        }
    } 

    return(
    <>
        <Container>
            <Row style={{marginTop: "1.5%" }}>
                <Col>
                    <Row>
                        <Col style={{ padding: "0%" }}>
                            <Image
                                src="https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                width="100%"
                                height="100%"
                            />
                        </Col>
                    </Row>
                </Col>
                <Col className="box">
                    <h1 className="text-center">Register</h1>
                    <Form noValidate validated={validated} onSubmit={submitForm}>
                        <Row style={{margin: "7%"}}>
                            <Col>
                                <Form.Group controlId="validationCustomUsername">
                                    <Form.Label>Name</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputUsername">:)</InputGroup.Text>
                                        <Form.Control
                                            type="text"
                                            placeholder="Your name"
                                            aria-describedby="inputUsername"
                                            required
                                            onChange={onchangeUsername}
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row style={{ margin: "7%" }}>
                            <Col>
                                <Form.Group controlId="validationEmail">
                                <Form.Label>E-mail</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputEmail">@</InputGroup.Text>
                                    <Form.Control
                                    type="text"
                                    placeholder="E-mail"
                                    aria-describedby="inputEmail"
                                    required
                                    onChange={onchangeEmail}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                    Give a valid email adress.
                                    </Form.Control.Feedback>
                                </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row style={{ margin: "7%" }}>
                            <Col>
                                <Form.Group controlId="validationCustomUsername">
                                <Form.Label>Password</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputSenha">?</InputGroup.Text>
                                    <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    aria-describedby="inputSenha"
                                    required
                                    onChange={onchangePassword}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                    The password is required.
                                    </Form.Control.Feedback>
                                </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row style={{ margin: "7%" }}>
                            <Col className="d-grid gap-2">
                                <Button type="submit" size="lg">
                                Submit
                                </Button>
                            </Col>
                            </Row>
                            <Row style={{ margin: "7%"}}>
                            <Col className="d-grid gap-2">
                                <a href="/" style={{textDecoration:"none"}}>
                                <SimpleCard text="Home"/>
                                </a>
                            </Col>
                        </Row>
                    </Form>
                </Col>

            </Row>
        </Container>
    </>
    );
}

export { RegisterContent };