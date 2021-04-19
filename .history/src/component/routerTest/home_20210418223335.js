import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "Home组件"
        }
    }



    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <hr />
                <Link to='/login'>跳转到登陆页</Link>
            </div>
        )
    }
}


export default Home