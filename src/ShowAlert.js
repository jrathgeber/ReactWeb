import React, { Component } from "react";


class ShowAlert extends Component {
  showAlert() {
    alert("See below");
  }

  render() {
    return <button onClick={this.showAlert}>Stocks</button>;
  }
}
export default ShowAlert;