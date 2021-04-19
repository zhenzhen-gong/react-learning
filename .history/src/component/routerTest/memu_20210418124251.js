import React, {Component} from 'react'


class Memu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "Memu组件"
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


export default Memu;