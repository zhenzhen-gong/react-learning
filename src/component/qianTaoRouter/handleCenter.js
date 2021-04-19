import React, {Component} from 'react'



class HandleCenter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "操作中心"
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


export default HandleCenter;