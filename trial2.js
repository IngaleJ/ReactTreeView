import React, {Component} from 'react'
import './MyTreeView.css'
class Tree extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  renderChilds (propsChilds, id) {
    let childs = []
    childs = propsChilds.map((child) => (
      <li key={child.id}>
        {
          child.childs[0] ? <Tree data={child} onSelected={this.props.onSelected} />: 
          child.node
        }
      </li>
    )
  )
    return childs
  }

  render () {
    // debugger
    let propsData = this.props.data
    if (propsData.length > 1){
    return (
      <div className='tree-view'>
        {
          propsData.map((data) =>
            <div key={data.id}>
              <ul>
                <a data-toggle='collapse' href={`#tree-node` + data.id}>
                  <span>{data.node}</span>
                </a>
                <div className='collapse' id={'tree-node' + data.id} >
                  {this.renderChilds(data.childs, data.id)}
                </div>
              </ul>
            </div>
          )
        }
      </div>
    )
    }else{
      return(
        <div key={propsData.id}>
          <ul>
            <a data-toggle='collapse' href={`#tree-node` + propsData.id}>
              <span>{propsData.node}</span>
            </a>
            <div className='collapse' id={'tree-node' + propsData.id} >
              {this.renderChilds(propsData.childs, propsData.id)}
            </div>
          </ul>
        </div>
      )
    }
  }
}

export default Tree

