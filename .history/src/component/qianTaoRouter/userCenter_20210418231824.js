import React, {Component} from 'react'



class UserCenter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "用户中心"
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


export default UserCenter