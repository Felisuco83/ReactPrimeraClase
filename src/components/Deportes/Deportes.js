import React, { Component } from "react";
import Deporte from "./Deporte";

class Deportes extends Component {
  //ESTE METODO LOS EJECUTARA EL HIJO LLAMANDO AL PARENT
  seleccionarFavorito = (deportefavorito) => {
    console.log("Favorito: " + deportefavorito);
    this.setState({
      seleccionado: deportefavorito,
    });
  };
  nuevoDeporte = () => {
    var deportes = this.state.deportes;
    deportes.push("Deporte " + this.contador);
    this.setState({ deportes: deportes });
    this.contador++;
  };
  state = {
    deportes: ["Padel", "Curling", "Petanca", "Rana", "Fútbol"],
    nombre: "Alumno react",
    seleccionado: "",
  };
  contador = 1;
  render() {
    return (
      <div>
        <h2>{this.state.seleccionado}</h2>
        <button onClick={this.nuevoDeporte}>Crear nuevo deporte</button>
        <h2>Deportes de {this.state.nombre}</h2>
        <ul>
          {this.state.deportes.map((depor, index) => {
            // return <li key={index}>{depor}</li>;
            return (
              <Deporte
                key={index}
                deporte={depor}
                seleccionarFavorito={this.seleccionarFavorito}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Deportes;
