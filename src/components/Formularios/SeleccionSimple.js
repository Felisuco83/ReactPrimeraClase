import React, { Component } from "react";

export default class SeleccionSimple extends Component {
  seleccionado = React.createRef();
  state = {
    filas: [],
    opciones: [],
  };
  generarOptions = () => {
    var options = [];
    for (var i = 0; i < 10; i++) {
      var rnd = Math.floor(Math.random() * 58 + 1);
      options.push(
        <option key={i} value={rnd}>
          {rnd}
        </option>
      );
    }
    this.setState({ opciones: options });
  };
  //METODO PARA CARGAR LOS OPTIONS SOLAMENTE UNA VEZ => CICLO DE VIDA
  componentWillMount = () => {
    this.generarOptions();
  };
  tablaMultiplicar = (e) => {
    e.preventDefault();
    var numero = parseInt(this.seleccionado.current.value);
    var datos = [];
    for (var i = 1; i <= 10; i++) {
      var operacion = numero * i;
      datos.push(
        <tr key={i}>
          <td>{numero + "*" + i}</td>
          <td>{operacion}</td>
        </tr>
      );
    }
    this.setState({
      filas: datos,
    });
  };
  render() {
    return (
      <div>
        <h1>Seleccion de elementos</h1>
        <form onSubmit={this.tablaMultiplicar}>
          <select name="selectnumeros" ref={this.seleccionado}>
            {this.state.opciones}
          </select>
          <button>Generar tabla</button>
        </form>
        <table border="1">
          <thead>
            <tr>
              <th>Operación</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>{this.state.filas}</tbody>
        </table>
      </div>
    );
  }
}
