import React, { Component } from 'react';
import './Button.css'; // Tell webpack that Button.js uses these styles




class Button extends Component {
  shoot() {
    alert("Great Shot!"); 
  }
  render() {
    return (
      <button onClick={this.shoot}>Take the shot man !</button>
    );
  }
}


export default Button;