import React, {Component} from 'react'
import Tree from './MyTreeView'

class RenderChild extends Component {
  constructor () {
    super()
    this.state = {
      show: false
    }
  }
  render () {
    let childs = []
    childs = this.props.childs.map((child) => (
      <li className='list-group-item ' key={child.id} >
        {
          child.childs[0] ? <Tree data={child} onSelected={this.props.onSelected} /> : child.node
        }
      </li>
    )
    )
    return childs
  }
}
export default RenderChild