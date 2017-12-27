import React, { Component } from 'react'
import './MyTreeView.css'
import RenderNodes from './RenderNode'

class Tree extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      show: !this.state.show
    })
  }

  renderNodes (data) {
    return (
      <div key={data.id}>
        <ul className='list-group'>
          <a onClick={this.toggle} >
            <span>{data.node}</span>
          </a>
          {
            this.state.show ? <div>
              {this.renderChilds(data.childs)}
            </div> : ''
          }
        </ul>
      </div>
    )
  }
  renderChilds (propsChilds) {
    // let style = this.state.show ? {display: 'none'} : {display: 'inline'}
    let childs = []
    childs = propsChilds.map((child) => (
      <li className='list-group-item ' key={child.id} >
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
        propsData.map((data) => <RenderNodes data={data}/>)
      )
    } else {
      return (
        <RenderNodes data ={propsData}/>
      )
    }
  }
}

export default Tree
// document.getElementsByClassName("collapse").collapse('show');
// ref :- http://jsfiddle.net/ssorallen/XX8mw/
