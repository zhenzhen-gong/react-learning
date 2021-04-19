import React, {Component} from 'react'
import Header from './header'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "Home组件",
            title: 'Home'
        }
    }

    fartherFun = ()=>{
      alert('123')
    }

    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <hr />
                <Header title={this.state.title} Fun={this.fartherFun}/>
            </div>
        )
    }
}

export default Home