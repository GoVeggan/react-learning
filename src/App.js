import React, { Component } from "react";
import './styles/App.css';
import { Switch, Route } from "react-router-dom";
import exComponent from "./components/exComponent";


export default class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={exComponent}
          />
          {/* <Route path="/path" component={} /> */}
        </Switch>
      </div>
    );
  }

}

