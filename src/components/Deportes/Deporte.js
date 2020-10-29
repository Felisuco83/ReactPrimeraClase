import React, { Component } from "react";

class Deporte extends Component {
  state = { seleccionado: "" };
  seleccionarDeporte = () => {
    //CUANDO PULSEMOS EN EL BOTON LLAMAREMOS AL METODO DEL PADRE
    this.props.seleccionarFavorito(this.props.deporte);
    // console.log(this.props.deporte);
    //CUANDO EL USUARIO HAGA CLICK LO CAMBIAMOS
    // this.setState({
    //   seleccionado: this.props.deporte,
    // });
  };
  render() {
    return (
      <li style={{ color: "blue" }}>
        {this.props.deporte}
        <button onClick={this.seleccionarDeporte}>Seleccionar Deporte</button>
        {/* <span style={{ color: "red" }}>
          Seleccionado: {this.state.seleccionado}
        </span> */}
      </li>
    );
  }
}

export default Deporte;
