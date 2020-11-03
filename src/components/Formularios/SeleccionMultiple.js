import React, { Component } from "react";

export default class SeleccionMultiple extends Component {
  seleccionMultipleRef = React.createRef();
  state = {
    ingredientes: [
      "leche",
      "huevos",
      "cacao",
      "avellanas",
      "azucar",
      "unicornio",
    ],
    seleccionados: "",
  };
  generarOptions = () => {
    var options = [];
    this.state.ingredientes.map((ingrediente, index) => {
      options.push(
        <option key={index} value={ingrediente}>
          {ingrediente}
        </option>
      );
    });
    return options;
  };

  mostrarSeleccionados = (e) => {
    e.preventDefault();
    //ESTABAMOS UTILIZANDO ref.current.value pero sólo para selecciones simples
    var options = this.seleccionMultipleRef.current.options;
    var datos = "";
    for (var i = 0; i < options.length; i++) {
      if (options[i].selected == true) {
        datos += options[i].value + ",";
      }
    }
    this.setState({
      seleccionados: datos,
    });
  };
  render() {
    return (
      <div>
        <h1>Seleccion de elementos</h1>
        <form onSubmit={this.mostrarSeleccionados}>
          <select name="selectnumeros" ref={this.seleccionMultipleRef} multiple>
            {this.generarOptions()}
          </select>
          <button>Ver seleccionados</button>
        </form>
        <h1 style={{ color: "red" }}>{this.state.seleccionados}</h1>
      </div>
    );
  }
}
