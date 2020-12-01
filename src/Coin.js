//import { stringToArray } from "ag-grid-community";
import React, { Component } from "react";
//import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

 componentDidMount() {
    fetch(`https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`)
      .then(res => res.json())
      .then(json => this.setState({ data: json.data }));

 //     const response = await fetch(`https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`);
 //     const json = await response.json();
 //     this.setState({ data: json.data });

  console.log("https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest");

  //console.log("Response " +   {response});

  //console.log("json " + json);

  console.log(this.state.data);

  }


 // {this.state.data.map(el => (
 //           
 //   <li>
 //     {el.name}: {el.id}
 //   </li>
 // ))}


  render() {
    return (
      <div>



        <p> Voila :  { JSON.stringify(this.state.data[0])} </p>
        <ul>


        {this.state.data.map(el => (
            
    <li key={el.id.toString()}>
      {el.name}: {el.id}
    </li>
  ))}


        </ul>
      </div>
    );
  }
}

export default App;

//ReactDOM.render(<App />, document.getElementById("app"));