import React, {Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: ""
        }
    }

    render() {
        return (
            <div>
                这是{this.props.title}页的头部
            </div>
        )
    }
}

export default Header