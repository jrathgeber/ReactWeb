
import React, { Component } from "react";

class Capi extends Component {
  constructor() {
    super();
    this.state = { data : "Help"};
  }

 componentDidMount() {



  try {

    const x = fetch(`/api/message`)
      .then(res => res.text())
      .then(dataStr => this.setState({ data: dataStr }));


    const response = fetch(`/api/todos`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({task: this.state.data})
        });

        //this.setState({ data: response.data })

    console.log("/api/message");
    console.log(response);
    console.log(x);
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