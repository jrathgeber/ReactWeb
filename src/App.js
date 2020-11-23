import React from 'react'
import logo from './logo.svg';
import './App.css';

import ShowAlert from './ShowAlert';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mechanizd will be based on React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>

         <button class="Button_Launch">Launch me</button> 
         
        <Button class="Button">Shoot </Button>

        <ShowAlert class="ShowAlert" />

      </header>
    </div>
  );
}

export default App;
