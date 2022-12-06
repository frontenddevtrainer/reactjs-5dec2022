import React, { useState, useEffect, useMemo } from "react";
import { Form, Button, Container, Card, Row, Col, Alert } from "react-bootstrap";

import Axios from "axios";

import { api } from "../../config/urls"

export default function LoginForm() {

    const [form, setForm] = useState({ username: "", password: "" });
    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const validationErrors = useMemo(() => {

        const errors = {};

        if (form.username === "") {
            errors.username = "Username is required."
        }

        if (form.password.length < 6) {
            errors.password = "Password length should be 6 or more."
        }

        return errors

    }, [form])

    async function handleSubmit(e) {
        e.preventDefault();
        // Write logic to make API or XHR or Ajax request.
        const response = await Axios.post(api.login, form);
        console.log(response);
        console.log(form)
    }

    return <div>
        <Container>
            <Row>
                <Col md={8}>
                    <Card>
                        <Card.Header>Login Form</Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" onChange={handleChange} placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        {validationErrors.username && <span>{validationErrors.username}</span>}
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
                            <Alert variant="success" className="mt-3">
                                <p>{JSON.stringify(form)}</p>
                            </Alert>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
}