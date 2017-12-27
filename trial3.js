import React, { Component } from 'react'
import './MyTreeView.css'
class Tree extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
  }

  renderNodes (data) {
    return (
      <div key={data.id}>
        <ul>
          <a data-toggle='collapse' href={`#tree-node` + data.id}>
            <span>{data.node}</span>
          </a>
          <div className='collapse' id={'tree-node' + data.id} >
            {this.renderChilds(data.childs)}
          </div>
        </ul>
      </div>
    )
  }
  renderChilds (propsChilds) {
    let childs = []
    childs = propsChilds.map((child) => (
      <li key={child.id}>
        {
          child.childs[0] ? <Tree data={child} onSelected={this.props.onSelected} /> : child.node
        }
      </li>
    )
    )
    return childs
  }

  render () {
    let propsData = this.props.data
    if (propsData.length > 1) {
      return (
        propsData.map((data) => this.renderNodes(data))
      )
    } else {
      return (
        this.renderNodes(propsData)
      )
    }
  }
}

export default Tree
// document.getElementsByClassName("collapse").collapse('show');
// ref :- http://jsfiddle.net/ssorallen/XX8mw/

