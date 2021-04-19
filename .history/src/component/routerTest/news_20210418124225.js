import React, {Component} from 'react'


class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "News组件"
        }
    }


    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
            </div>
        )
    }
}


export default News;