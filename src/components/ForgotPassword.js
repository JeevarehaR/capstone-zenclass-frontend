import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "../Global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import image from "../assets/zenclass.png";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "Please enter a valid email address")
    .max(30, "Enter an alternate email address")
    .required("Please provide a email address")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid format"),
});

export default function ForgotPassword() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (user) => {
      console.log("onsubmit", user);
      forgotPassword(user);
    },
  });
  const forgotPassword = (user) => {
    const id = toast.loading("Please wait...");
    console.log("createUser", user);
    fetch(`${API}/auth/forgot-password`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        toast.update(id, {
          render: data.message,
          type: data.message.includes(
            "Password reset mail has been sent successfully"
          )
            ? "success"
            : "error",
          isLoading: false,
          autoClose: 5000,
        });
      })
      .catch((err) => {
        toast(err.message);
      });
  };
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
                <ToastContainer />
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group className="form-group mt-2">
                    <Form.Label className="label-style mb-0">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder=""
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <p className="error">
                      {formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : ""}
                    </p>
                  </Form.Group>
                  <Button
                    type="submit"
                    className="login-btn btn btn-lg w-100 mt-4 mb-4"
                  >
                    Reset Password
                  </Button>
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
