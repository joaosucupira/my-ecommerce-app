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
import { ErrorMessage } from "./ErrorMessage";
import axios from "axios";

function LoginContent() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  function onchangeEmail(event) {
    setEmail(event.target.value);
  }
  function onchangePassword(event) {
    setPassword(event.target.value);
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
    console.log(email, password);


    try {
      // LOGIN
      // debugger
      const loginResponse = await axios.post(
        "http://localhost:8000/api/login",
        { email, password },
        {
          Headers: {
            "Content-Type": "application/json"
          }
        }
      );

      // TOKEN
      const token = loginResponse.data.access_token;
      localStorage.setItem('token', token);
      console.log(token);

      // TOKEN TO BEARER
      const userResponse = await axios.get(
        "http://localhost:8000/api/user",
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
      );

      const userData = userResponse.data;
      console.log('User Data:', userData);

      // LOCAL STORAGE

      localStorage.setItem('username', userData.name);
      localStorage.setItem('useremail', userData.email);

      mensagemDeSucesso("Successfully logged in.");
      navigate("/");
      
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
                      Login
                    </Button>
                  </Col>
                </Row>
                <Row style={{ margin: "7%"}}>
                      <Col md={12}>
                        <a href="/" style={{ textDecoration: "none" }}><SimpleCard text="Home" /></a>

                        <a href="/register" style={{ textDecoration: "none" }}><SimpleCard text="Register" /></a>
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


// // v2

// import { useState } from "react";
// import {
//   Button,
//   Col,
//   Container,
//   Form,
//   Image,
//   InputGroup,
//   Row,
// } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "../assets/css/login.css";
// import SimpleCard from "./SimpleCard";

// function LoginContent() {
//   const [validated, setValidated] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   let navigate = useNavigate();

//   function onchangeEmail(event) {
//     setEmail(event.target.value);
//   }
  
//   function onchangePassword(event) {
//     setPassword(event.target.value);
//   }

//   function mensagemDeErro(mensagem = "Mensagem de erro") {
//     toast.error(mensagem, {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   }

//   function mensagemDeSucesso(mensagem = "") {
//     toast.success(mensagem, {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   }

//   async function submitForm(event) {
//     event.preventDefault();
//     setValidated(true);

//     const payload = {
//       email: email,
//       password: password,
//     };

//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     };

//     try {
//       const response = await fetch("https://localhost:8000/login", options);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       const token = data.token;
//       const userName = data.user.name;
//       const userEmail = data.user.email;

//       localStorage.setItem('token', token);
//       localStorage.setItem('userName', userName);
//       localStorage.setItem('userEmail', userEmail);

//       mensagemDeSucesso("Successfully logged in.");
//       navigate("/"); // redireciona a home
      
//     } catch (error) {
//       mensagemDeErro("Wrong username or password.");
//       console.error(error);
//     }
//   }

//   return (
//     <Container>
//       <Row style={{ marginTop: "2%" }}>
//         <Col md={1}></Col>
//         <Col md={10}>
//           <Row>
//             <Col md={6} style={{ padding: "0%" }}>
//               <Image
//                 src="https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 width="100%"
//                 height="100%"
//               />
//             </Col>
//             <Col md={6} className="box">
//               <h1 className="text-center">Login</h1>
//               <Form noValidate validated={validated} onSubmit={submitForm}>
//                 <Row style={{ margin: "7%" }}>
//                   <Col>
//                     <Form.Group controlId="validationEmail">
//                       <Form.Label>E-mail</Form.Label>
//                       <InputGroup hasValidation>
//                         <InputGroup.Text id="inputEmail">@</InputGroup.Text>
//                         <Form.Control
//                           type="text"
//                           placeholder="E-mail"
//                           aria-describedby="inputEmail"
//                           required
//                           onChange={onchangeEmail}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                           Give a valid email address.
//                         </Form.Control.Feedback>
//                       </InputGroup>
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row style={{ margin: "7%" }}>
//                   <Col>
//                     <Form.Group controlId="validationCustomUsername">
//                       <Form.Label>Password</Form.Label>
//                       <InputGroup hasValidation>
//                         <InputGroup.Text id="inputSenha">?</InputGroup.Text>
//                         <Form.Control
//                           type="password"
//                           placeholder="Senha"
//                           aria-describedby="inputSenha"
//                           required
//                           onChange={onchangePassword}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                           The password is required.
//                         </Form.Control.Feedback>
//                       </InputGroup>
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row style={{ margin: "7%" }}>
//                   <Col className="d-grid gap-2">
//                     <Button type="submit" size="lg">
//                       Login
//                     </Button>
//                   </Col>
//                 </Row>
//                 <Row style={{ margin: "7%" }}>
//                   <Col className="d-grid gap-2">
//                     <a href="/" style={{ textDecoration: "none" }}>
//                       <SimpleCard text="Home" />
//                     </a>
//                   </Col>
//                 </Row>
//               </Form>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export { LoginContent };
