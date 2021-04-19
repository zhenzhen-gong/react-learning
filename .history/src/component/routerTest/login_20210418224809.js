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
    handleName = (e)=>{
       let name = e.target.value
       this.setState({
           name:name
       })
    }
    handlePassword = (e)=>{
        let password = e.target.value
        this.setState({
            password:password
        })
     }

     submit = (e)=>{
       e.preventDefault()
       let name = this.state.name
       let password = this.state.password
       if(name==="admin"&&password==='123456') {
           this.setState({
               loginflag: true
           })
       } else {
           alert('账号密码错误，请重新登陆')
       }
     }
    render() { 
        return ( 
            <form onSubmit={this.submit}>
               <input type='text' value={this.state.name} onChange={this.handleName}></input>
               <input type='text' value={this.state.password} onChange={this.handlePassword}></input>
               <button>登录</button>
            </form>
         );
    }
}
 
export default Login;