import React from 'react';

import logo from './logo.svg';
import './App.css';

import ShowAlert from './ShowAlert';
import Button from './Button';

import Grid from './Grid';
import ReactGA from 'react-ga';

import MailchimpSubscribe from "react-mailchimp-subscribe"


function initializeReactGA() {
  ReactGA.initialize('UA-83288571-6');
  ReactGA.pageview('/homepage');
}


function App() {

  initializeReactGA()

  console.log(process.env);

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
                

                Subscribe
                <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />

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
