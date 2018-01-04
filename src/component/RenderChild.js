import React, {Component} from 'react'
import Tree from './MyTreeView'

class RenderChild extends Component {
  constructor () {
    super()
    this.state = {
      show: false
    }
  }
  onSelect (value) {
    // debugger
    return this.props.onSelect(value)
  }
  render () {
    let childIcon = this.props.childIcon
    let parentIcon = this.props.parentIcon
    let childs = []
    childs = this.props.childs.map((child) => (
      <li key={child.id} className='tree-child'>
        {
          child.child && child.childs[0]
          ? <Tree data={child} onSelected={this.props.onSelected} childIcon={childIcon} parentIcon={parentIcon}/>
          : <span className={childIcon + 'dropdown-item'}>
            <p onClick={this.onSelect.bind(this, child.value)}>{child.node}</p>
          </span>
        }
      </li>
    )
    )
    return childs
  }
}
export default RenderChild
