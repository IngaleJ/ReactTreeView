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
    let childIcon = this.props.childIcon
    let parentIcon = this.props.parentIcon
    let childs = []
    childs = this.props.childs.map((child) => (
      <li key={child.id} className='tree-child'>
        {
          child.childs[0]
          ? <Tree data={child} onSelected={this.props.onSelected} childIcon={childIcon} parentIcon={parentIcon}/>
          : <span className={childIcon} onClick={this.props.onSelect}>
            <a href={child.url}>{child.node}</a>
          </span>
        }
      </li>
    )
    )
    return childs
  }
}
export default RenderChild
