import React, { Component } from "react";

export default class Collatz extends Component {
  numero = React.createRef();
  state = {
    numeros: [],
  };

  recibirdatos = (event) => {
    event.preventDefault();
    var numero = this.numero;
    var numeros = this.state.numeros;
    while (numero != 0) {
      numeros.push(numero);
      if (numero % 2) {
        numero = numero / 2;
      } else {
        numero = numero * 3 + 1;
      }
    }
    this.setState({ numeros: numeros });
  };
  render() {
    return (
      <div>
        <ul>
          {this.numeros.length > 0 && (
            {this.state.numeros((numero, index) => {
              return (
                <React.Fragment key={index}>
                  <li>{numero}</li>
                </React.Fragment>
              );
            })},
          )}
        </ul>
        <form onSubmit={this.recibirdatos}>
          <label htmlFor="numero">Numero: </label>
          <input
            type="number"
            ref={this.numero}
            name="numero"
            onChange={this.recibirdatos}
          ></input>
          <br />
          <button>Enviar datos</button>
        </form>
      </div>
    );
  }
}
