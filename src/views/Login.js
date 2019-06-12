import React, { Component } from "react";
import { Subscribe } from "unstated";
import { Button, Form, Container, Col } from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  a() {
    console.log("kocham maciusia");
  }

  render() {
    console.log("Kocham Gosie");
    return (
      <Container style={{ width: "25vw", marginTop: "10vh" }}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div
            className="d-flex flex-column"
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Button variant="primary" onClick={this.a}>
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    );
  }
}
