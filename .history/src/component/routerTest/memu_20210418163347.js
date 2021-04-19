import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Memu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "Memu组件",
            list: [
                {
                    api:"01",
                    title: '一级菜单'
                },
                {
                    api:"02",
                    title: '二级菜单'
                },
                {
                    api:"03",
                    title: '三级菜单'
                },
                {
                    api:"04",
                    title: '四级菜单'
                }
            ]
        }
    }


    render() {
        return (
            <ul>
                {this.state.list.map((value, key) => {
                    return (
                        <li key={key}>
                            <Link to={`/menucontent?aid=${value.api}`}>{value.title}</Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}


export default Memu;