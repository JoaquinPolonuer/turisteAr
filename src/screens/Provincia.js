import React, { Component } from "react";
import caba from "../resources/caba.jpg";
import "../styles/App.css";
import { Navbar, Row, Col, Button, NavbarBrand, Container } from "reactstrap";

class Provincia extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render(props) {
    var a = 3;
    return (
      <div>
        <Navbar dark className="nav">
          <h1 className="display">TuristeAr</h1>
        </Navbar>
        <h1 className="white titulo">Ahora tenemos que seguirla juntos ;)</h1>
      </div>
    );
  }
}

export default Provincia;
