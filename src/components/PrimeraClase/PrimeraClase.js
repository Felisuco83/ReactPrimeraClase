import React, { Component } from "react";
import "./PrimeraClase.css";

//PODEMOS DECLARAR METODOS FUERA DE LA CLASE CON LA SINTAXIS FUNCTION. ES LO MISMO PERO NO PODEMOS UTILIZAR VARS DE LA CLASE
//PARA LLAMARLAS NO SÉ UTILIZA THIS
function miFuncion() {
  console.log("Estoy en mi funcion");
}

// CLASES SIEMPRE EMPEZANDO POR MAYÚSCULA
class PrimeraClase extends Component {
  //PARA CREAR METODOS NO SE UTILIZA NINGUNA PALABRA CLAVE (VAR, FUNCTION,CONST)
  //LO MISMO PARA VARIABLES
  contador = 1;
  //ASI SE DECLARAN LAS VARIABLES DE ESTADO
  state = { valor: parseInt(this.props.inicio) };
  metodoAccion = () => {
    console.log("Contador" + this.contador);
    this.contador++;
  };
  //PODEMOS MANEJAR VARIABLES DE ESTADO PARA LOS DIBUJOS
  incrementarEstado = () => {
    //VAMOS A TENER UN CONTADOR PARA DIBUJAR SU INCREMENTO EN LA PÁGINA
    this.setState({ valor: this.state.valor + 1 });
  };

  //PODEMOS REALIZAR EVALUACIONES CONSTANTES EN EL METODO RENDER Y ES DONDE TENDREMOS EL RETURN
  // LAS VARIABLES SE DECLARAN COMO EN JS VANILLA, HAY ALGUNA DIFERENCIA QUE VEREMOS MÁS ADELANTE

  render() {
    var numero = 1;
    const hacerAlgo = () => {
      console.log("Haciendo algo..." + numero);
      numero++;
    };
    return (
      <React.Fragment>
        <h1 className="rojo">{this.props.titulo}</h1>
        <h2 className="verde"> Estado: {this.state.valor}</h2>

        <button onClick={this.metodoAccion}>Incrementar contador</button>
        <button
          onClick={() => {
            miFuncion();
            hacerAlgo();
          }}
        >
          Funciones externas
        </button>
        <button onClick={this.incrementarEstado}>
          Incrementar variable de clase
        </button>
      </React.Fragment>
    );
  }
}

export default PrimeraClase;
