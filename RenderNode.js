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

  render () {
    return (
      <div key={this.props.data.id}>
        <ul className='list-group'>
          <a onClick={this.toggle} >
            <span>{this.props.data.node}</span>
          </a>
          {
            this.state.show ? <RenderChild childs={this.props.data.childs} /> : ''
          }
        </ul>
      </div>
    )
  }
}
export default RenderNode
