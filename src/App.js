import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from  './component/MyTreeView';

class App extends Component {
  constructor () {
    super()
    this.state = {

    }
    this.onSelected = this.onSelected.bind(this)
  }
  onSelected (selected) {
    alert (selected.id + selected.node + selected.childs)
  }
  render () {
    const inputData = {"id":0,"node":"world","childs":[{"id":1,"url":"www.google.com","node":"South America","childs":[{"id":11,"url":"www.google.com","node":"Brazil","childs":[]},{"id":12,"url":"www.google.com","node":"Uruguay","childs":[]}]},{"id":2,"url":"www.google.com","node":"North America","childs":[{"id":21,"url":"www.google.com","node":"Canada","childs":[]},{"id":22,"url":"www.google.com","node":"USA","childs":[{"id":221,"url":"www.google.com","node":"New York","childs":[{"id":2211,"node":"Brooklyn","childs":[]}]}]}]}]}
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="App-title">React Tree View</h2>
          </header>        
        </div>
        <div>
          <div className='col-md-4 col-md-offset-3 tree-view'>
            <Tree data={inputData} onSelected={this.onSelected} 
              childIcon='fa fa-leaf' 
              parentIcon='fa fa-tree'/>
          </div>
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
    "url":"www.google.com",
    "node": "South America",
    "childs": [
      {
        "id": 11,
        "url":"www.google.com",
        "node": "Brazil",
        "childs": []
      },
      {
        "id": 12,
        "url":"www.google.com",
        "node": "Uruguay",
        "childs": []
      }
    ]
  },
  {
    "id": 2,
    "url":"www.google.com",
    "node": "North America",
    "childs": [
      {
        "id": 21,
        "url":"www.google.com",
        "node": "Canada",
        "childs": []
      },
      {
        "id": 22,
        "url":"www.google.com",
        "node": "USA",
        "childs": [
          {
            "id": 221,
            "url":"www.google.com",
            "node": "New York",
            "childs": [
              {
                "id": 2211,
                "node": "Brooklyn",
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
