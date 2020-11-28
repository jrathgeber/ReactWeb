import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


//import React from 'react'
import logo from './logo.svg';
import './App.css';

import ShowAlert from './ShowAlert';
import Button from './Button';

import IexList from './IexList';

import Coin from './Coin';

//</div><div className="ag-theme-alpine" style={ { height: 400, width: 600 } }></div>

function App() {


 // const [gridApi, setGridApi] = useState(null);
 // const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData/*, setRowData*/] = useState([
      {make: "Toyota", model: "Celica", price: 35000},
      {make: "Ford", model: "Mondeo", price: 32000},
      {make: "Porsche", model: "Boxter", price: 72000}
  ]);



  return (


<div id="parent">

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

          
          <Button class="Button">Shoot </Button>

          <ShowAlert class="ShowAlert" />

          <IexList class="IexList" />

          <Coin class="Coin" />


        </header>
      </div>

      <div className="ag-theme-alpine" style={ { height: 400, width: 600 } }>

        <AgGridReact
            rowData={rowData}>
            <AgGridColumn field="make"></AgGridColumn>
            <AgGridColumn field="model"></AgGridColumn>
            <AgGridColumn field="price"></AgGridColumn>
          </AgGridReact>

    </div>

</div>

  );
}

export default App;
