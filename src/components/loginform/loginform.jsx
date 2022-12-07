import React, { useState, useEffect, useMemo } from "react";
import { Form, Button, Container, Card, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

import Axios from "axios";

import { api } from "../../config/urls"
import { useUserContext } from "../../context/user";
import { useTheme } from "../../context/theme";

export default function LoginForm() {

    // This is for registering the user first time as we dont register page.
    // useEffect(()=>{
    //     Axios.post("http://localhost:3300/register", { email : "abc@abc.com", password : "1234" })
    // }, [])

    const [form, setForm] = useState({ email: "", password: "" });
    const [serverError, setServerError] = useState();
    const navigate = useNavigate();
    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const { setUser } = useUserContext()
    const { theme } = useTheme()

    const validationErrors = useMemo(() => {

        const errors = {};

        if (form.email === "") {
            errors.email = "email is required."
        }

        if (form.email.length < 6) {
            errors.password = "Password length should be 6 or more."
        }

        return errors

    }, [form])

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            // Write logic to make API or XHR or Ajax request.
            const response = await Axios.post(api.login, form);
            const { accessToken } = response.data;
            window.sessionStorage.setItem("access-token", accessToken);
            setUser( { ...response.data  } )
            navigate("/");
        } catch (error) {
            setServerError({ message: error.response.data })
        }
    }

    return <div>
        <Container>
            <Row>
                <Col md={8}>
                    <Card style={{ backgroundColor: theme === "light" ? "white" : "grey" }}>
                        <Card.Header>Login Form</Card.Header>
                        <Card.Body>
                            { serverError && <Alert variant="error" className="mt-3">
                                    {serverError.message}
                            </Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="email" onChange={handleChange} placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        {validationErrors.email && <span>{validationErrors.email}</span>}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
                                    <Form.Text className="text-muted">
                                        {validationErrors.password && <p>{validationErrors.password}</p>}
                                    </Form.Text>
                                </Form.Group>

                                <Button variant="primary" type="submit">Login</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
}