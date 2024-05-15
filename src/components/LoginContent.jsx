// import { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function LoginContent() {

//   const [validated, setValidated] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function onchangeEmail() {
//     //
//     setEmail()
//   }

//   function onchangePassword() {
//     //
//   }

//   async function submitForm(event){
//     //
//   }
//   return (
//     <Container>
//       <Form >
//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//             <Form.Text className="text-muted">
//               We'll never share your email with anyone else.
//             </Form.Text>
//           </Form.Group>
//         </Row>

//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//           </Form.Group>
//         </Row>

//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//           </Form.Group>
//         </Row>

//         <Row className="mb-3">
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Row>
//       </Form>
//     </Container>
//   );
// }

// export { LoginContent };


import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "../assets/css/login.css";
import SimpleCard from "./SimpleCard";

function LoginContent() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  let navigate = useNavigate();

  function onchangeEmail(event) {
    setEmail(event.target.value);
  }
  function onchangeSenha(event) {
    setSenha(event.target.value);
  }

  function mensagemDeErro(mensagem = "Mensagem de erro") {
    toast.error(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  function mensagemDeSucesso(mensagem = "") {
    toast.success(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  
  async function submitForm(event) {
    event.preventDefault();
    setValidated(true);

    const form = new FormData();
    form.append("email", email);
    form.append("password", senha);
    const options = {
      method: "POST",
      mode: "cors",
      body: form,
    };
    console.log(email, senha);

    try {
      const response = await fetch(
        "https://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
        // "https://localhost:8000/login",
        options
      );
      debugger
      const data = await response.json();
      console.log(data);
      const token = data.token
      const nomeUsuario = data.user.name
      const emailUsario = data.user.email

      localStorage.setItem('token', token)
      localStorage.setItem('nomeUsuario', nomeUsuario)
      localStorage.setItem('emailUsario', emailUsario)

      mensagemDeSucesso("Successfully logged in.");

      navigate("/"); // redireciona a home
      
    } catch (error) {
      mensagemDeErro("Wrong username or password.");
      
      console.log(error);
    }
  }

  return (
    <Container>
      <Row style={{ marginTop: "2%" }}>
        <Col md={1}></Col>
        <Col md={10}>
          <Row>
            <Col md={6} style={{ padding: "0%" }}>
              <Image
                src="https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width="100%"
                height="100%"
              />
            </Col>
            <Col md={6} className="box">
              <h1 className="text-center">Login</h1>
              <Form noValidate validated={validated} onSubmit={submitForm}>
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
                          placeholder="Senha"
                          aria-describedby="inputSenha"
                          required
                          onChange={onchangeSenha}
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
                      Login
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
        </Col>
      </Row>
    </Container>
  );
}

export { LoginContent };