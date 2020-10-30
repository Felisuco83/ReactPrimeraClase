import React, { Component } from "react";
import LogoMetalGear from "./../../Images/metalgearsolid.jpg";

class MetalGear extends Component {
  render() {
    return (
      <div>
        <h1>Componente Metal Gear</h1>
        <img src={LogoMetalGear} />
      </div>
    );
  }
}

export default MetalGear;
