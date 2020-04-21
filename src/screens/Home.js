import React, { Component } from "react";
import caba from "../resources/caba.jpg";
import "../styles/App.css";
import { Navbar, Row, Col, Button, NavbarBrand, Container } from "reactstrap";

class Home extends Component {
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
        <Row className="main">
          {provincias.map(function (item, i) {
            return (
              <Col
                lg={{ size: 3 }}
                className="cont"
                onClick={() => {
                  window.location.href = "provincia";
                }}
              >
                <Col
                  className="content"
                  lg={{ size: 12 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    backgroundImage: `url(${item.foto})`,
                  }}
                >
                  <Col lg={{ size: 11 }}>
                    <h1 className="white titulo">{item.nombre}</h1>
                  </Col>

                  <Row className="contentRow justify-content-center "></Row>
                </Col>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
var resources = "../resources/";
const provincias = [
  { nombre: "Ciudad de Buenos Aires", foto: require("../resources/caba.jpg") },
  {
    nombre: "Chubut",
    foto: require("../resources/chubut.jpg"),
  },
  {
    nombre: "Catamarca",
    foto: require("../resources/catamarca.jpg"),
  },
  {
    nombre: "Chaco",
    foto: require("../resources/chaco.jpg"),
  },

  {
    nombre: "Córdoba",
    foto: require("../resources/cordoba.jpg"),
  },
  {
    nombre: "Corrientes",
    foto: require("../resources/corrientes.jpg"),
  },
  {
    nombre: "Entre Ríos",
    foto: require("../resources/entrerios.jpg"),
  },
  { nombre: "Buenos Aires", foto: require("../resources/buenosaires.jpg") },

  {
    nombre: "Formosa",
    foto: require("../resources/formosa.jpg"),
  },
  {
    nombre: "Jujuy",
    foto: require("../resources/jujuy.jpg"),
  },
  {
    nombre: "La Pampa",
    foto: require("../resources/lapampa.jpg"),
  },
  {
    nombre: "La Rioja",
    foto: require("../resources/larioja.jpg"),
  },
  {
    nombre: "Mendoza",
    foto: require("../resources/mendoza.jpg"),
  },
  {
    nombre: "Misiones",
    foto: require("../resources/misiones.jpg"),
  },
  {
    nombre: "Neuquén",
    foto: require("../resources/neuquen.jpg"),
  },
  {
    nombre: "Río Negro",
    foto: require("../resources/rionegro.jpg"),
  },
  {
    nombre: "Salta",
    foto: require("../resources/salta.jpg"),
  },
  {
    nombre: "San Juan",
    foto: require("../resources/sanjuan.jpg"),
  },
  {
    nombre: "San Luis",
    foto: require("../resources/sanluis.jpg"),
  },
  {
    nombre: "Santa Cruz",
    foto: require("../resources/santacruz.jpg"),
  },
  {
    nombre: "Santa Fe",
    foto: require("../resources/santafe.jpg"),
  },
  {
    nombre: "Santiago del Estero",
    foto: require("../resources/santiago.jpg"),
  },
  {
    nombre: "Tierra del Fuego",
    foto: require("../resources/tierradelfuego.jpg"),
  },
  {
    nombre: "Tucumán",
    foto: require("../resources/tucuman.jpg"),
  },
];
export default Home;
