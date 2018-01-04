import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from  './component/MyTreeView';

class App extends Component {
  constructor () {
    super()
    this.state = {
      value:null
    }
    this.onSelected = this.onSelected.bind(this)
  }
  onSelected (value) {
    debugger
    console.log(value)
  }
  render () {
    const inputData = {"id":0,"node":"world","childs":[{"id":1,"url":"/","node":"South America","childs":[{"id":11,"url":"/brazil","node":"Brazil","childs":[]},{"id":12,"url":"/","node":"Uruguay","childs":[]}]},{"id":2,"url":"/","node":"North America","childs":[{"id":21,"url":"/","node":"Canada","childs":[]},{"id":22,"url":"/","node":"USA","childs":[{"id":221,"url":"/","node":"New York","childs":[{"id":2211,"node":"Brooklyn","childs":[]}]}]}]}]}
    const inputData1 = [{"id":1,"node":"South America","childs":[{"id":11,"value":11,"node":"Brazil"},{"id":12,"value":12,"node":"Uruguay"},{"id":13,"value":13,"node":"Uruguay1"}]},{"id":2,"node":"North America","childs":[{"id":21,"value":21,"node":"Canada"},{"id":22,"value":22,"node":"USA"}]}]
    const placeHolder = this.state.value ? this.state.value :'RCA No'
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
            
          </div>
          <div className="dropdown show">
            <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {placeHolder}
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Tree data={inputData1} onSelect={this.onSelected} 
                childIcon='fa fa-leaf' 
                parentIcon='fa fa-tree'/>
            </div>
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
    "value":1,
    "node": "South America",
    "childs": [
      {
        "id": 11,
        "url":"/brazil",
        "node": "Brazil",
        "childs": []
      },
      {
        "id": 12,
        "url":"/",
        "node": "Uruguay",
        "childs": []
      }
    ]
  },
  {
    "id": 2,
    "url":"/",
    "node": "North America",
    "childs": [
      {
        "id": 21,
        "url":"/",
        "node": "Canada",
        "childs": []
      },
      {
        "id": 22,
        "url":"/",
        "node": "USA",
        "childs": [
          {
            "id": 221,
            "url":"/",
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
