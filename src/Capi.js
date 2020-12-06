
import React, { Component } from "react";

class Capi extends Component {
  constructor() {
    super();
    this.state = { data : "Help"};
  }

 componentDidMount() {

    fetch(`/api/message`)
      .then(res => res.json())
      .then(json => this.setState({ data: json.text }));

  console.log("/api/message");

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


        <p> React Web API :  { JSON.stringify(this.state.data)} </p>

      </div>
    );
  }
}

export default Capi;

//ReactDOM.render(<App />, document.getElementById("app"));