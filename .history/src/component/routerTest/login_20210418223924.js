import React, {Component} from 'react'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            password: '',
            loginflag: false
         }
    }
    render() { 
        return ( 
            <form>
               <input type='text' value={this.state.name} onChange={this.handleName}></input>
               <input type='text' value={this.state.password} onChange={this.handlePassword}></input>
               <button>登录</button>
            </form>
         );
    }
}
 
export default Login;