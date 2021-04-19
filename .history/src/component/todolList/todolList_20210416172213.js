import React, {Component} from 'react'

import './todolList.css'

class TodolList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemList: []
        }
    }
    
    render() {
        return (
            <div>
                <div className="title">
                <h1>TodolList: </h1>
                <input type='text'/>
                </div>
                
               
            </div>
        )
    }
}

export default TodolList