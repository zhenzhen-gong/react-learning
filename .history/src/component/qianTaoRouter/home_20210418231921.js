import React, {Component} from 'react'



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "首页"
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


export default Home