import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul style={{ display: "inline" }}>
          <li>
            {" "}
            <a href="/">Home</a>
          </li>
          <li>
            {" "}
            <a href="/blackflag"> Black Flag</a>
          </li>
          <li>
            {" "}
            <a href="/syndicate"> Syndicate </a>
          </li>
          <li>
            {" "}
            <a href="/metalgear"> Metal Gear </a>
          </li>
        </ul>
      </div>
    );
  }
}
