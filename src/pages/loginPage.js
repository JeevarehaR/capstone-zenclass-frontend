import React from "react";
import image from "../assets/zenclass.png";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function JikiLogin() {
  return (
    <Container fluid className="container-fluid">
      <Row className="main-row m-0">
        <Col md={8} className="left-col">
          <Row className="png-row">
            <Col md={12}>
              <img src={image} alt="zenclass png" />
            </Col>
          </Row>
          <Row md={6}>
            <Col md={12} className="form">
              <Col md={6}>
                <Form>
                  <Form.Group className="form-group mt-2">
                    <Form.Label className="label-style mb-0">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Example : johndoe@mail.com"
                    />
                  </Form.Group>
                  <Form.Group className="form-group mt-1">
                    <Form.Label className="label-style mb-0">
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Your password"
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    className="login-btn btn btn-lg w-100 mt-4 mb-4"
                  >
                    Login
                  </Button>
                  <Row className="row-forgot">Forgot Password?</Row>
                </Form>
              </Col>
            </Col>
          </Row>
        </Col>
        <Col md={4} className="right-col">
          <img
            src="https://www.zenclass.in/static/media/login_img.cbed4040.png"
            className="img-class"
            alt="zenclass img"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default JikiLogin;
{
  /* <Col className="left-col" xs={12} md={8}>
         
          <Row className="form-row">
            <Col className="d-flex" md={12}>
              <Col md={6}>
                
              </Col>
             
            </Col>
          </Row>
        </Col>
        <Col className="right-col pr-0" xs={6} md={4}>
         
        </Col> */
}
