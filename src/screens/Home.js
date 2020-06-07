import React, { Component } from "react";
import caba from "../resources/caba.jpg";
import "../styles/App.css";
import { Navbar, Row, Col, Button, NavbarBrand, Container } from "reactstrap";
import history from "../services/history";

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
                onClick={() => {
                  history.push({
                    pathname: "/provincia",
                    state: item,
                  });
                }}
              >
                <Col
                  className="cardcontent"
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
  {
    nombre: "Ciudad de Buenos Aires",
    foto: require("../resources/caba.jpg"),
    info: "",
  },
  {
    nombre: "Chubut",
    foto: require("../resources/chubut.jpg"),
    info:
      "Diferentes atracciones en una misma provincia, desde avistaje de ballenas en la ciudad de Madryn, el centro de Esquí La Hoya  a tan solo 13 km de la Ciudad de Esquel y durante el mes de Octubre podes sentirte en Holanda visitando el Campo de Tulipanes rodeado de montañas nevadas  a 12 km de Trevelin, y entre tantas cosas podes perderte en el Laberinto Patagonia ubicado en El Hoyo.",
  },
  {
    nombre: "Catamarca",
    foto: require("../resources/catamarca.jpg"),
    info: "",
  },
  {
    nombre: "Chaco",
    foto: require("../resources/chaco.jpg"),
    info: "",
  },

  {
    nombre: "Córdoba",
    foto: require("../resources/cordoba.jpg"),
    info:
      "Historia y paisajes maravillosos en la provincia de córdoba, desde la cumbrecita donde todo parece un cuento de hadas, hasta Carlos Paz donde podes disfrutar de obras de teatro en temporada y visitar el Cucu en pleno centro, sin dudas un lugar magico.En cosquin podes sentir la musica folclorica al caminar y visitar los hermosos museos que ofrece, por otro lado en Cordoba Capital el paso del buen pastor con las aguas danzantes justo en frente de la iglesia de los capuchinos.",
  },
  {
    nombre: "Corrientes",
    foto: require("../resources/corrientes.jpg"),
    info:
      "Una excelente ciudad para disfrutar de los carnavales de monte caseros, la fiesta de la naranja, soñar en la laguna del Iberá, visitar la basílica de Itatí, y recorrer las playas de de Ituzaingó, y un poco de historia con la casa de San Martin en Yapeyu.",
  },
  {
    nombre: "Entre Ríos",
    foto: require("../resources/entrerios.jpg"),
    info:
      "Un excelente lugar para relajarte en las termas de la federación con aguas termales y parque acuático para disfrutar en familia, en temporada puedes disfrutar de pesca deportiva la cual es uno de los productos más importantes dentro de la región del litoral.",
  },
  {
    nombre: "Buenos Aires",
    foto: require("../resources/buenosaires.jpg"),
    info: "",
  },

  {
    nombre: "Formosa",
    foto: require("../resources/formosa.jpg"),
    info: "",
  },
  {
    nombre: "Jujuy",
    foto: require("../resources/jujuy.jpg"),
    info: "",
  },
  {
    nombre: "La Pampa",
    foto: require("../resources/lapampa.jpg"),
    info:
      "El hermoso parque nacional Lihuel Calel ubicado a 120 km al sudeste de General acha, es un excelente lugar para recorrer por los senderos donde vas a ir descubriendo paisajes únicos. La reserva Provincial Parque Luro te muestra su castillo el cual fue casco de estancia, se encuentra entre bosques, lagunas y médanos y actualmente es Monumento Histórico Nacional.",
  },
  {
    nombre: "La Rioja",
    foto: require("../resources/larioja.jpg"),
    info: "",
  },
  {
    nombre: "Mendoza",
    foto: require("../resources/mendoza.jpg"),
    info:
      "Prepara tus pies para caminar por el cerro más alto de sudamérica, el conocido Cerro Aconcagua, en invierno visitar el centro de esqui Las leñas y para lo más pequeños el acuario municipal de mendoza y luego de toda la actividad podrás relajarte en una de las tantas bodegas que ofrece la hermosa provincia de Mendoza.",
  },
  {
    nombre: "Misiones",
    foto: require("../resources/misiones.jpg"),
    info: "",
  },
  {
    nombre: "Neuquén",
    foto: require("../resources/neuquen.jpg"),
    info:
      "Neuquen te espera con su bellísimo paseo de la costa, el cual es un paseo largo e iluminado junto al rio, también se encuentra el museo nacional de las bellas artes.",
  },
  {
    nombre: "Río Negro",
    foto: require("../resources/rionegro.jpg"),
    info:
      "Atracciones diferentes para cada época del año, en verano podes visitar el lago Nahuel Huapi el cual se encuentra a una hora de Bariloche, durante el invierno el cerro catedral abre sus puertas para que puedas practicar deportes de nieve con toda tu familia. Y por el verano la playa de las grutas se llena de turistas por la temperatura de su agua cálida y los entretenimientos nocturnos. Durante todo el año la feria artesanal de Bolson se encuentra  con diferentes propuestas culinarias y diferentes artesanías",
  },
  {
    nombre: "Salta",
    foto: require("../resources/salta.jpg"),
    info: "",
  },
  {
    nombre: "San Juan",
    foto: require("../resources/sanjuan.jpg"),
    info:
      "Un poco de historia en la casa Natal de Faustino Sarmiento el museo provincial de bellas artes, el valle de la luna y terminar el dia en una de las bodegas Sanjuaninas. ",
  },
  {
    nombre: "San Luis",
    foto: require("../resources/sanluis.jpg"),
    info:
      "Varios son los cerros y reservas dentro de esta provincia, de los cuales podes disfrutar en verano.En merlo a 2000 mts de altura podes ver de un lugar mágico la puesta del sol, en el llamado Mirador del sol.",
  },
  {
    nombre: "Santa Cruz",
    foto: require("../resources/santacruz.jpg"),
    info:
      "Podrás encontrarte rodeado de diferente paisajes, desde montañas y fauna autóctona hasta el conocido Glaciar Perito Moreno y además podrás conocer la historia de la Cuevas de las Manos que se encuentra a 118 km de Perito Moreno.  ",
  },
  {
    nombre: "Santa Fe",
    foto: require("../resources/santafe.jpg"),
    info:
      "Podes recorrer el camino de la leche con recorridos recreativos y agroturísticos que se encuentran desde el oeste hasta el centro de la provincia, en cuanto a lo histórico en Cayastá, el Parque Arqueológico Ruinas de Santa Fe La Vieja constituye su expresión más prístina e incontrastable para conocer; al igual que en San Lorenzo, el Campo de la Gloria rememora la única batalla del General José de San Martín contra los españoles en suelo argentino, entre otros hitos destacables. En el norte santafesino la Ruta del Tanino ofrece al visitante la posibilidad de contemplar a través de sus edificaciones y museos, la memoria de los pueblos forestales.",
  },
  {
    nombre: "Santiago del Estero",
    foto: require("../resources/santiago.jpg"),
  },
  {
    nombre: "Tierra del Fuego",
    foto: require("../resources/tierradelfuego.jpg"),
    info:
      "Te vas a sentir en el fin del mundo con una atmósfera mágica  donde vas a poder  navegar en el canal de Beagle, durante el invierno esquiar y hacer snowboard en el cerro Castor que se encuentra a 26 km de Ushuaia. Y todo el año se encuentra abierto el Parque Nacional Tierra del fuego",
  },
  {
    nombre: "Tucumán",
    foto: require("../resources/tucuman.jpg"),
    info: "",
  },
  {
    nombre: "Edotos",
    foto: require("../resources/edotos.jpg"),
    info:
      "Este es un bonus. No es una provincia pero lo queria agregar porque me parecia tierno :). Nuestro primer mes era una hermosisima excusa para seguir con este proyectito tan lindo que tenemos. Sigamos juntos siempre y no dejemos de sonreir. Te amo mucho mucho y espero que te haya gustado la sorpesita.",
  },
];
export default Home;
