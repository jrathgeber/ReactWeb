import React from 'react';

//import React from 'react'
import logo from './logo.svg';
import './App.css';

import ShowAlert from './ShowAlert';
import Button from './Button';

import Grid from './Grid';
import ReactGA from 'react-ga';


function initializeReactGA() {
  ReactGA.initialize('UA-83288571-6');
  ReactGA.pageview('/homepage');
}


function App() {

  initializeReactGA()

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
