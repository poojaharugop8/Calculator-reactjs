import "./Button.css";

import React, { Component } from "react";

class Button extends Component {
  isOpeartor = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };

  render() {
    return (
      <div
        className={`button ${
          this.isOpeartor(this.props.children) ? "" : "operator"
        }`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Button;
