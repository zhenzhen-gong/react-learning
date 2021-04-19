import React, {Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: ""
        }
    }

    fun = ()=>{
      this.props.fartherFun()
    }

    render() {
        return (
            <div>
                <h3>这是{this.props.title}页的头部</h3>
                <hr />
                <button type="button" onClick={this.fun}>像父组件传值</button>
            </div>
        )
    }
}

export default Header