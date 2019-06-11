import React, { Component } from "react";
import { Subscribe } from "unstated";
import { Button } from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
         <Button variant="warning" href="/">Main page</Button>
      </div>
    )
  }
}
