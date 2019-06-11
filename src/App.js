import React, { Component } from "react";
import './styles/App.css';
import { Switch, Route } from "react-router-dom";
import View from "./views/View";
import Login from "./views/Login"
import { Navbar, Nav, FormControl, Button,Form } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/"><img style={{height: "10%", width: "10%"}} src={ require('./resources/dog.png') } /></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
        <Switch>
          <Route
            exact
            path="/"
            component={View}
          />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }

}

