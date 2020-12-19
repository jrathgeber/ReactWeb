import React, { Component } from 'react';
import './Button.css'; // Tell webpack that Button.js uses these styles




class Button extends Component {
  shoot() {
    alert("Great Shot!"); 
  }
  render() {
    return (
      <button onClick={this.shoot}>Crypto Currencies</button>
    );
  }
}


export default Button;