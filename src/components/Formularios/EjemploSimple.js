import React, { Component } from "react";

export default class EjemploSimple extends Component {
  nombre = React.createRef();
  apellidos = React.createRef();

  state = {
    usuario: {},
  };

  recibirdatos = (e) => {
    e.preventDefault();
    console.log("Nombre: " + this.nombre.current.value);
    console.log("Apellidos: " + this.apellidos.current.value);
    var user = {
      nombre: this.nombre.current.value,
      apellidos: this.apellidos.current.value,
    };
    this.setState({ usuario: user });
  };
  render() {
    return (
      <div>
        <h1>Ejemplo Forms React</h1>
        {this.state.usuario.nombre && (
          <h1 style={{ backgroundColor: "blue" }}>
            {this.state.usuario.nombre}, {this.state.usuario.apellidos}
          </h1>
        )}
        <form onSubmit={this.recibirdatos}>
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            ref={this.nombre}
            name="nombre"
            onChange={this.recibirdatos}
          ></input>
          <br />
          <label htmlFor="apellidos">Apellidos: </label>
          <input
            type="text"
            ref={this.apellidos}
            name="nombre"
            onChange={this.recibirdatos}
          ></input>
          <br />
          <button>Enviar datos</button>
        </form>
      </div>
    );
  }
}
