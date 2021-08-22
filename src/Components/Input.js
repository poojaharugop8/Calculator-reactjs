import "./Input.css";

import React, { Component } from "react";

class Input extends Component {
  
  render() {
    return (
      <div className="input">
          {this.props.children}
      </div>
    );
  }
}
export default Input;
