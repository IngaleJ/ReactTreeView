import React, {Component} from 'react'
import RenderChild from './RenderChild'
class RenderNode extends Component {
  constructor () {
    super()
    this.state = {
      show: false
    }
    this.toggle = this.toggle.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }

  toggle () {
    this.setState({
      show: !this.state.show
    })
  }

  onSelect (){
    console.log('Node',this.props.onSelect)
    return this.props.onSelect
  }

  render () {
    let childIcon = this.props.childIcon
    let parentIcon = this.props.parentIcon
    return (
      <div key={this.props.data.id} className='tree'>
        <ul className='tree-ul'>
          <a onClick={this.toggle} className={this.state.show
            ? 'tree-node tree-node-expand' : 'tree-node tree-node-collapsed'} >
            <span className={parentIcon} aria-hidden='true' onClick={this.onSelect}>
              { this.props.data.node}
            </span>
          </a>
          {
            this.state.show
            ? <RenderChild childs={this.props.data.childs}
              childIcon={childIcon} parentIcon={parentIcon} onSelect={this.onSelect} /> : ''
          }
        </ul>
      </div>
    )
  }
}
export default RenderNode
