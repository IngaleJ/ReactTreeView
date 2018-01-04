import React, {Component} from 'react'
import RenderChild from './RenderChild'
class RenderNode extends Component {
  constructor () {
    super()
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

  onSelect (value){
    console.log('Node',value)
    return this.props.onSelect(value)
  }

  render () {
    let childIcon = this.props.childIcon
    let parentIcon = this.props.parentIcon
    return (
      <div key={this.props.data.id} className='tree'>
        <ul className='tree-ul'>
          <a onMouseOver={this.toggle} className={this.state.show
            ? 'tree-node tree-node-expand' : 'tree-node tree-node-collapsed'} >
            <span className={parentIcon} aria-hidden='true'>
              { this.props.data.node}
            </span>
          </a>
          {
            this.state.show
            ? <RenderChild childs={this.props.data.childs}
              childIcon={childIcon} parentIcon={parentIcon} onSelect={this.onSelect.bind(this)} /> : ''
          }
        </ul>
      </div>
    )
  }
}
export default RenderNode
