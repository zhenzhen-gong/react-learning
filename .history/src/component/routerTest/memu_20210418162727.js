import React, {Component} from 'react'


class Memu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "Memu组件",
            list: [
                {
                    api:"01",
                    title: '一级'
                },
                {
                    api:"02",
                    title: '二级'
                },
                {
                    api:"03",
                    title: '三级'
                },
                {
                    api:"04",
                    title: '四级'
                }
            ]
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