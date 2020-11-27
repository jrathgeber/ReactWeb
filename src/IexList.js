import React, { Component } from 'react';

const iex = require('iexcloud_api_wrapper'); // gets auth from .env automatically



class IexList extends Component {

  constructor(props) {

    super()

    this.state = { items: [] };
    this.state = {date: new Date()};

  }


  async componentDidMount() {

    this.state.items = await this.getMoverData();
    
  }
  
  getMoverData = async() => {

    try {

      const gainers = await iex.list('gainers');
      console.log(gainers);
      this.setState({ items: gainers });
      return { gainers };

    }
    catch(error) {
      console.error(`Could not get data: ${error}`);
      //process.exit(-1);  // nonzero exit code indicates failure
    }
  };


  render() {
    return (
      <div>

      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

      <body>
            <h1>Today's Biggest Stock Movers</h1>
            <h2>Gainers </h2>
            <p>  {<h2>They are  {(toString(this.state.data))}.</h2>} </p>
            <ul>

            {this.state.items  ? this.state.items.map(item => { return <div key={item.id}>{item.title}</div>;  }) :  "Loading..."}

            </ul>
          </body>
       </div>
    );
  }
}

  export default IexList;