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
        <Col
          lg={{ size: 10, order: 2, offset: 1 }}
          xs={{ size: 10, order: 2, offset: 1 }}
          style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
          className="content homeContent text-center"
        >
          <Row>
            <Col
              lg={{ size: 6, offset: 1 }}
              style={{
                height: "45vh",
                display: "flex",
                alignItems: "flex-end",
                backgroundImage: `url(${this.props.location.state.foto})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "5vh",
              }}
            ></Col>
            <Col
              lg={{ size: 5, offset: 0 }}
              style={{ paddingLeft: "7vh", paddingRight: "7vh" }}
            >
              <h1 style={{ textAlign: "start", fontSize: "6vh" }}>
                {this.props.location.state.nombre}
              </h1>
              <div className="provinciatext">
                <h3 style={{ textAlign: "justify", fontWeight: "normal" }}>
                  {this.props.location.state.info}
                </h3>
              </div>
              <Button color="warning" size="lg" block>
                Ver pagina oficial
              </Button>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}

export default Provincia;
