import React, { Component } from "react";
import Numero from "./Numero";

class Numeros extends Component {
  sumarNumero = (numero) => {
    this.setState({ suma: this.state.suma + numero });
  };
  setNuevoNumero = () => {
    var rnd = Math.floor(Math.random() * 99 + 1);
    var numeros = this.state.numeros;
    numeros.push(rnd);
    this.setState({
      numeros: numeros,
    });
  };
  state = {
    numeros: [1, 11, 22, 33, 44, 55],
    suma: 0,
  };

  render() {
    return (
      <div>
        <h1>La suma de los números es {this.state.suma}</h1>
        {this.state.numeros.map((numero, index) => {
          return <Numero numero={numero} sumarNumero={this.sumarNumero} />;
        })}
        <button onClick={this.setNuevoNumero}>
          {" "}
          Crear nuevo numero aleatorio{" "}
        </button>
      </div>
    );
  }
}

export default Numeros;
