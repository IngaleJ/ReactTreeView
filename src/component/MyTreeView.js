import React, { Component } from 'react'
import './MyTreeView.css'
import RenderNodes from './RenderNode'

class Tree extends Component {
  constructor(){
    super()
    this.onSelect = this.onSelect.bind(this)
  }
  onSelect (){
    return this.props.onSelect()
  }
  render () {
    let propsData = this.props.data
    let childIcon = this.props.childIcon
    let parentIcon = this.props.parentIcon
    if (propsData.length > 1) {
      return (
        propsData.map((data) =>
          <RenderNodes
            data={data}
            childIcon={childIcon}
            parentIcon={parentIcon}
            onSelect={this.onSelect} />)
      )
    } else {
      return (
        <RenderNodes
          data={propsData}
          childIcon={childIcon}
          parentIcon={parentIcon}
          onSelect={this.onSelect} />
      )
    }
  }
}

export default Tree
