import React, { Component } from 'react'
import './MyTreeView.css'
import RenderNodes from './RenderNode'

class Tree extends Component {
  render () {
    let propsData = this.props.data
    let childIcon = this.props.childIcon
    let parentIcon = this.props.parentIcon
    if (propsData.length > 1) {
      return (
        propsData.map((data) => <RenderNodes data={data} childIcon={childIcon} parentIcon={parentIcon} />)
      )
    } else {
      return (
        <RenderNodes data={propsData} childIcon={childIcon} parentIcon={parentIcon} />
      )
    }
  }
}

export default Tree
