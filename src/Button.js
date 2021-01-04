import React, { Component } from 'react';
import './Button.css'; // Tell webpack that Button.js uses these styles




class Button extends Component {
  shoot() {
    alert("Comming soon!"); 
  }
  render() {
    return (
      <button onClick={this.shoot}>Crypto Currencies</button>
    );
  }
}


export default Button;