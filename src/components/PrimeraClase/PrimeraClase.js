import React, { Component } from "react";
import "./PrimeraClase.css";

// CLASES SIEMPRE EMPEZANDO POR MAYÚSCULA
class PrimeraClase extends Component {
  //PODEMOS REALIZAR EVALUACIONES CONSTANTES EN EL METODO RENDER Y ES DONDE TENDREMOS EL RETURN
  render() {
    return (
      <React.Fragment>
        <h1 className="rojo">Primer componente class</h1>
      </React.Fragment>
    );
  }
}

export default PrimeraClase;
