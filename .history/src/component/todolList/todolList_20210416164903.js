import React, {Component, ref, refs} from 'react'

class TodolList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemList: []
        }
    }
    addItem = ()=>{
        var toolList = this.state.itemList
        toolList.push(this.refs.content.value)
        this.setState({
            itemList: toolList
        })
    }
    render() {
        return (
            <div>
                <h1>TodolList 案例演示</h1>
                <br />
                <input type="text" ref="content" /> 
                <button onClick={this.addItem}>增加</button>
                <ul>
                    {
                      this.state.itemList.map((item,key) => {
                          return <li key={key}>{item} -------<button onClick={this.deleteItem}>删除</button></li>
                      })
                    }
                </ul>
            </div>
        )
    }
}

export default TodolList