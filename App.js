import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from  './component/MyTreeView';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
    this.onSelected = this.onSelected.bind(this)
  }
  onSelected(selected){
    alert(selected.id + selected.node + selected.childs)
  }
  render() {
    const inputData = {"id":0,"node":"world","childs":[{"id":1,"node":"South America","childs":[{"id":11,"node":"Brazil","childs":[]},{"id":12,"node":"Uruguay","childs":[]}]},{"id":2,"node":"North America","childs":[{"id":21,"node":"Canada","childs":[]},{"id":22,"node":"USA","childs":[{"id":221,"node":"New York","childs":[{"id":2211,"node":"Brooklin","childs":[]}]}]}]}]}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Tree View</h1>
        </header>
        <div className='col-md-4'>
          <Tree data={inputData} onSelected={this.onSelected}/>
        </div>
      </div>
    );
  }
}

export default App;
/**
 * 
 * {
  "id":0,
  "node":"world",
  "childs": [
  {
    "id": 1,
    "node": "South America",
    "childs": [
      {
        "id": 11,
        "node": "Brazil",
        "childs": []
      },
      {
        "id": 12,
        "node": "Uruguay",
        "childs": []
      }
    ]
  },
  {
    "id": 2,
    "node": "North America",
    "childs": [
      {
        "id": 21,
        "node": "Canada",
        "childs": []
      },
      {
        "id": 22,
        "node": "USA",
        "childs": [
          {
            "id": 221,
            "node": "New York",
            "childs": [
              {
                "id": 2211,
                "node": "Brooklin",
                "childs": []
              }
            ]
          }
        ]
      }
    ]
  }
]
}


 */
