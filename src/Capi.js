
import React, { Component } from "react";

class Capi extends Component {
  constructor() {
    super();
    this.state = { data : "Help"};
  }

 componentDidMount() {



  try {

    fetch(`/api/message`)
      .then(res => res.json())
      .then(json => this.setState({ data: json.text }));

    console.log("/api/message");
    console.log(this.state.data);

  }
  catch(error) {
    console.error(`Could not get data: ${error}`);
    //process.exit(-1);  // nonzero exit code indicates failure
  }


  }

  render() {
    return (
      <div>


        <p> React Web API :  { JSON.stringify(this.state.data)} </p>

      </div>
    );
  }
}

export default Capi;