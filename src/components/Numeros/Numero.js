import React, { Component } from "react";

class Numero extends Component {
  sumarNumero = () => {
    this.props.sumarNumero(this.props.numero);
  };
  render() {
    return (
      <li style={{ color: "blue" }}>
        {this.props.numero}
        <button onClick={this.sumarNumero}>Sumar número</button>
      </li>
    );
  }
}

export default Numero;
