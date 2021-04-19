import React, {Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: ""
        }
    }
   // 调用父组件的方法
    fun = ()=>{
      this.props.childFun("爸爸，我是你的孩子")
    }

    home = ()=>{
      alert(this.props.home.state.msg)
    }

    render() {
        return (
            <div>
                <h3>这是{this.props.title}页的头部</h3>
                <hr />
                <button type="button" onClick={this.fun}>像父组件传值</button>
                <hr/>
                <button type="button" onClick={this.home}>父组件传过来整个home组件</button>
            </div>
        )
    }
}

export default Header