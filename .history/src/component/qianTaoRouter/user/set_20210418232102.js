import React, {Component} from 'react'



class SetInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "设置"
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


export default SetInfo;