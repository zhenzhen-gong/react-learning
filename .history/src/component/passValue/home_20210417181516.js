import React, {Component} from 'react'
import Header from './header'
import Axios from '../axios'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "Home组件",
            title: 'Home'
        }
    }

    fartherFun = (val)=>{
      // val为子组件传过来的值
      alert(val)
    }

    getData = (val)=>{
        alert(val)
    }

    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <hr />
                <Header title={this.state.title} childFun={this.fartherFun} home={this}/>
                <hr />
                <Axios />
            </div>
        )
    }
}


export default Home