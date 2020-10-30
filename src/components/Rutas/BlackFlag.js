import React, { Component } from "react";
import LogoBlackFlag from "./../../Images/BlackFlag.jpg";

class BlackFlag extends Component {
  render() {
    return (
      <div>
        <h1>Componente BlackFlag</h1>
        <img src={LogoBlackFlag} />
      </div>
    );
  }
}

export default BlackFlag;
