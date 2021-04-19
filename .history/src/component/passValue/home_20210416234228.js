import React, {Component} from 'react'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "Home组件",
            title: 'Home'
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <hr />
                
            </div>
        )
    }
}

export default Home