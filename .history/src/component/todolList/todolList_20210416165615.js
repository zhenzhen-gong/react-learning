import React, {Component} from 'react'

class TodolList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemList: []
        }
    }
    addItem = ()=>{
        let toolList = this.state.itemList
        toolList.push(this.refs.content.value)
        this.setState({
            itemList: toolList
        })
    }
    deleteItem = (key)=>{
        let toolList = this.state.itemList
        toolList.slice(key, 0)
        
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
                          return <li key={key}>{item} -------<button onClick={this.deleteItem.bind(this, key)}>删除</button></li>
                      })
                    }
                </ul>
            </div>
        )
    }
}

export default TodolList