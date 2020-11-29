import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default (props) => {
    return (
        props.type == 'Login' ? (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        ) : (
            <Form>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-type Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
        )
    )
}