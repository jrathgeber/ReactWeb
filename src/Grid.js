import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [] ,
      columnDefs: [
        {
          headerName: 'Symbol',
          field: 'symbol',
          sortable: true,
          filter: true,
          checkboxSelection: true
        },
        {
          headerName: 'Name',
          field: 'companyName',
          sortable: true,
          filter: true,
          type: 'textColumn'
        },
        {
          headerName: 'Price',
          field: 'latestPrice',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Source:',
          field: 'latestSource',
          sortable: true,
          filter: true
        }
      ]
    };
  }


  componentDidMount() {

    try {
      const x = fetch(`/api/gainers`)
        //.then(res => res.json())
        //.then(json => this.setState({ data: json }));
        .then(result => result.json())
        .then(rowData => this.setState({ rowData }));
        console.log(x);

    }
    catch(error) {
      console.error(`Could not get data: ${error}`);
      //process.exit(-1);  // nonzero exit code indicates failure
    }

  }

  componentDidUpdate() {
    this.columnApi.setColumnVisible('model', this.state.modelVisibility);
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  };

  toggleModelColumn = () => {
    this.setState({ modelVisibility: !this.state.modelVisibility });
  };

  onButtonClick = () => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataString = selectedData
      .map(node => `${node.make} ${node.model}`)
      .join(', ');
    alert(`Selected Nodes: ${selectedDataString}`);
  };


  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '500px',
          width: '800px'
        }}
      >
        <button type="button" onClick={this.onButtonClick}>
          Selected Rows
        </button>
        <button type="button" onClick={this.toggleModelColumn}>
          Toggle Model Column
        </button>
        <AgGridReact
          onGridReady={this.onGridReady}
          rowSelection="multiple"
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        ></AgGridReact>
      </div>
    );
  }
}

export default Grid;