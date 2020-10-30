import React, { Component } from "react";
import LogoSyndicate from "./../../Images/syndicate.jpg";

class Syndicate extends Component {
  render() {
    return (
      <div>
        <h1>Componente Metal Gear</h1>
        <img src={LogoSyndicate} />
      </div>
    );
  }
}

export default Syndicate;
