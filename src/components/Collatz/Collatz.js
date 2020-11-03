import React, { Component } from "react";

export default class Collatz extends Component {
  numero = React.createRef();
  state = {
    numeros: [],
  };

  recibirdatos = (event) => {
    event.preventDefault();
    var numero = parseInt(this.numero.current.value);
    var numeros = this.state.numeros;
    console.log("lokesea");
    while (numero != 1) {
      numeros.push(numero);
      if (numero % 2 == 0) {
        numero = numero / 2;
      } else {
        numero = numero * 3 + 1;
      }
    }
    if (numero == 1) numeros.push(1);
    this.setState({ numeros: numeros });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.numeros.length > 0 &&
            this.state.numeros.map((numero, index) => {
              return (
                <React.Fragment key={index}>
                  <li>{numero}</li>
                </React.Fragment>
              );
            })}
        </ul>
        <form onSubmit={this.recibirdatos}>
          <label htmlFor="numero">Numero: </label>
          <input
            type="number"
            ref={this.numero}
            name="numero"
            // onChange={this.recibirdatos}
          ></input>
          <br />
          <button>Enviar datos</button>
        </form>
      </div>
    );
  }
}
