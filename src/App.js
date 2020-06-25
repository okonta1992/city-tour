import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Tourlist from "./components/Tourlist/Tourlist";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>
          <Navbar />
          <Tourlist />
        </h3>
      </React.Fragment>
    );
  }
}

export default App;
