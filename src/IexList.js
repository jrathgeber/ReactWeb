import React, { Component } from 'react';

//const iex = require('iexcloud_api_wrapper'); // gets auth from .env automatically

class IexList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password1: "",
      password2: "",
      error: ""
    }

    this.state = {date: new Date()};

 //   this.state = {gainers: await iex.list('gainers')};

  }


  componentDidMount() {
  //  this.state = {date: new Date()};
    this.getMoverData();
  }
  
  getMoverData = async() => {

    try {

      //const gainers = await iex.list('gainers');
      //console.log(gainers);
      //this.setState ({gainers})

    //  this.state = {date: new Date()};

      //let data = await iex.list('gainers');

       //let posts = res.concat;
      // this will re render the view with new data

      //this.setState({data})

      //this.setState({
      //  Posts: posts.map((post, i) => (
      //    <li key={i} className="list-group-item">{post.text}</li>
      //  ))
     // });




    }
    catch(error) {
      console.error(`Could not get data: ${error}`);
      //process.exit(-1);  // nonzero exit code indicates failure
    }
  };
  
//{this.state.post}
// <textarea value={this.state.data.map(e=>JSON.stringify(e))}  defaultValue="val" />

  render() {
    return (
      <div>

      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

       </div>
    );
  }

}

  export default IexList;