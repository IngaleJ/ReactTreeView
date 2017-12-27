import React,{Component} from 'react';
import './MyTreeView.css'
class Tree extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    renderTree(propsData){
        let childs = []
        childs = propsData.childs.map((node) =>
            <li key={node.id}>{node.node}</li>
        )
        return(
            <div key={propsData.id}>
            <ul >
                {propsData.node}
                {childs}
            </ul>
                
            </div>
        )
    }

    render(){
        let propsData = this.props.data
        return(
            <div className='tree-view'>
                {propsData.map((data) => (this.renderTree(data)))}
            </div>
        )
    }
}

export default Tree
