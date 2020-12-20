import React from 'react';

//import React from 'react'
import logo from './logo.svg';
import './App.css';

import ShowAlert from './ShowAlert';
import Button from './Button';

//import IexList from './IexList';
//import Coin from './Coin';
//import Capi from './Capi';
import Grid from './Grid';

//</div><div className="ag-theme-alpine" style={ { height: 400, width: 600 } }></div>

function App() {


  return (


<div id="parent">

    <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Mechanizd was developed by :  
          </p>
          <a
            className="App-link"
            href="https://www.jasonrathgeber.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jason Rathgeber
          </a>
          <br></br>

          
          <Button class="Button">Shoot </Button>

          <ShowAlert class="ShowAlert" />
 
          <br></br>

          <Grid class="Grid" />

          <br></br>

        </header>
      </div>

</div>

  );
}

export default App;
