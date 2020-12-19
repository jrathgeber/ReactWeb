import React, { Component } from "react";


class ShowAlert extends Component {
  showAlert() {
    alert("I'm an alert");
  }

  render() {
    return <button onClick={this.showAlert}>Stocks</button>;
  }
}
export default ShowAlert;