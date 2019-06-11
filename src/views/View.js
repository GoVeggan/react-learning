import React, { Component } from "react";
import { Subscribe } from "unstated";
import {Button} from "react-bootstrap"

export default class View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button variant="outline-secondary" href="/login">Login</Button>
        <img src="http://static.prsa.pl/images/1f6946f5-731e-4f73-895f-a67b073f6e65.jpg" />
      </div>
    )
  }
}
