
import React, { Component } from "react";

class Capi extends Component {
  constructor() {
    super();
    //this.state = { data : "Help"};
    this.state = { data: [] };
  }


 componentDidMount() {

    try {
      const x = fetch(`/api/gainers`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
        console.log(x);

    }
    catch(error) {
      console.error(`Could not get data: ${error}`);
      //process.exit(-1);  // nonzero exit code indicates failure
    }

  }



  render() {
    return (
      <div>
        <p> React Web API :  { "this.state.data"} </p>


      <table>
      <tbody>
        
        {
        
        this.state.data.map(function(item, key) {
               return (
                  <tr key = {key}>
                      <td>{item.symbol}</td>          
                  </tr>
                )
             })
             
        }
             
        </tbody>
       </table>



      </div>
    );
  }
}

export default Capi;