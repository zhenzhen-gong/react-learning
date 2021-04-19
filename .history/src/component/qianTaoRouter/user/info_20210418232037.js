import React, {Component} from 'react'



class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "用户信息"
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


export default UserInfo;