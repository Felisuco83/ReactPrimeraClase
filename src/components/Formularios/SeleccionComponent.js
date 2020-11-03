import React, { Component } from "react";
import Select from "react-select";

export default class SeleccionComponent extends Component {
  state = {
    ingredientes: [
      "leche",
      "cacao",
      "vainilla",
      "avellanas",
      "sal",
      "azucar",
      "tomate",
    ],
    opciones: [],
    selectedOption: null,
    seleccionados: "",
  };
  componentWillMount = () => {
    this.generarOptions();
  };
  generarOptions = () => {
    var datos = [];
    this.state.ingredientes.map((ingrediente, i) => {
      datos.push({ value: ingrediente, label: ingrediente });
    });
    this.setState({ opciones: datos });
  };
  mostrarSeleccionado = (seleccionado) => {
    this.setState({
      selectedOption: seleccionado,
      seleccionados: seleccionado.value,
    });
  };
  render() {
    return (
      <div>
        <h1> Select con un componente externo</h1>
        <Select
          value={this.state.selectedOption}
          options={this.state.opciones}
          onChange={this.mostrarSeleccionado}
          isMulti="true"
        />
        <h2 style={{ color: "blue" }}> {this.state.seleccionados}</h2>
      </div>
    );
  }
}
