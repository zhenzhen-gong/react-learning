import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import UserInfo from './user/info'
import SetInfo from './user/set'



class UserCenter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "用户中心"
        }
    }



    render() {
        return (
            <div className="user-center">
                <div className='left'>
                    <Link to='/user/'>基本信息</Link>
                    <Link to='/user/set'>设置</Link>
                </div>
                <div className='right'>
                    <Route path='/user/' component={UserInfo} />
                    <Route path='/user/set' component={SetInfo} />
                </div>
                
                
            </div>
        )
    }
}


export default UserCenter