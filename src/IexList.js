import React, { Component } from 'react';




const iex = require('iexcloud_api_wrapper'); // gets auth from .env automatically


const quote = async (sym) => {
    const quoteData = await iex.quote(sym);
    // do something with returned quote data
    console.log(quoteData)
};

//quote("WDC");




class IexList extends Component {

  constructor(props) {

    super()

    this.state = { items: [] };
    this.state = {date: new Date()};
    
    console.log("Hello !!!!!!");
    console.log(process.env);
    console.log('The value of PORT is:', process.env.PORT);
    console.log(iex);

    //this.quote("WDC");

  }


  async componentDidMount() {

   
    console.log("componentDidMount " + iex.AccountMetaData.IEXCLOUD_PUBLIC_KEY);

    this.state.items = await this.getMoverData();
    

    quote("WDC");

  }
  
  getMoverData = async() => {

    console.log("GET MOVER " + iex.AccountMetaData.IEXCLOUD_PUBLIC_KEY);

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


            <h1>Today's Biggest Stock Movers</h1>
            <h2>Gainers </h2>

            <ul>

            {this.state.items  ? this.state.items.map(item => { return <div key={item.id}>{item.title}</div>;  }) :  "Loading..."}

            </ul>

       </div>
    );
  }
}

  export default IexList;