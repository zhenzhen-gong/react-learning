import React, {Component} from 'react'
import PropTypes from 'prop-types'

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
      this.props.home.getData("通过调用父组件的方法传值")
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
// 未接受到父组件传过来的值的时候，默认是内容
Header.defaultProps = {
  title: "所有"
}

// 父组件传过来值的类型约束
Header.propTypes = {
    title: PropTypes.string 
}

export default Header