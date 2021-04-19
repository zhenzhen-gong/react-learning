import React, {Component} from 'react'

import './todolList.css'

class TodolList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemList: [
                {
                    title: '看书学习',
                    checked: true
                },
                {
                    title: '看新闻长见识',
                    checked: false
                },
                {
                    title: '踢足球健身',
                    checked: true
                },
                {
                    title: '看电视娱乐',
                    checked: false
                },
                {
                    title: '做饭陶冶情操',
                    checked: true
                }
            ]
        }
    }

    addItem = (e)=>{
       if(e.keyCode === 13) {
        let toolList = this.state.itemList
        toolList.push({
            title: e.target.value,
            checked: false
        })
         this.setState({
             itemList: toolList
         })
       }
    }
    doneItem = (key)=>{
        let toolList = this.state.itemList
        if(!toolList[key].checked) {
            toolList[key].checked = !toolList[key].checked
            this.setState({
                itemList: toolList
            })
        }
    }
    
    render() {
        return (
            <div>
                <div className="title">
                  <h1>TodolList: </h1>
                  <input type='text' onKeyUp={this.addItem}/>
                </div>
                <div>
                    <h2>待办事项</h2>
                    <ul>
                        {
                            this.state.itemList.map((item, key) => { 
                                if (!item.checked) {
                                 return <li key={key}>
                                     <input type="checkbox" checked={item.checked} onChange={this.doneItem.bind(this, key)}/>
                                     {item.title} -------<button>删除</button></li>
                                } 
                            })
                        }
                    </ul>
                </div>   
                <div>
                    <h2>已办事项</h2>
                    <ul>
                        {
                            this.state.itemList.map((item, key) => { 
                                if (item.checked) {
                                 return <li key={key}>
                                     <input type="checkbox" checked={!item.checked} onChange={this.doneItem.bind(this, key)} />
                                     {item.title} -------<button>删除</button></li>
                                } 
                            })
                        }
                    </ul>
                </div>         
            </div>
        )
    }
}

export default TodolList