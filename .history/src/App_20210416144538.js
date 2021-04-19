import React, {Component} from 'react'
import './app.less' // 未生效，因为缺少loader转换的配置
import './App.css';

class App extends Component {
   constructor(props) {
     super(props)
     this.state= {
       name: '学习React',
       inputval: '',
       person: '',
       sex: 1,
       citys: ["北京","上海", "深圳"],
       hobby: [
         {
           'title': '睡觉',
           'checked': true
         },
         {
          'title': '吃饭',
          'checked': true
        },
        {
          'title': '敲代码',
          'checked': true
        }
       ]
     }
   }
   // this指向问题，使用箭头函数定义函数，也可以在绑定的时候.bind（this）改变this指向，也可以在constructor中用this.函数名 = this.函数名.bind(this)来改变this指向
   handleInputval = (e)=>{
      this.setState({
        inputval: e.target.value
      })
   }
   handlePerson = (e)=>{
      this.setState({
        person: e.target.value
      })
   }
   handleSex = (e)=>{
    this.setState({
      sex: e.target.value
    })
   }
   handleCity = (e)=>{
      console.log('1')
   }
   render() {
     return (
       <div className="context">
         <h1>{this.state.name}</h1>
         <div className="input-test">
           <input type="text" value={this.state.inputval} onChange={this.handleInputval}></input>
           <span>{this.state.inputval}</span>
         </div>
         <form className="form-submit" onSubmit={this.handleSubmit}>
           姓名：<input type="text" value={this.state.person} onChange={this.handlePerson}></input>
           {/*<div>
             性别：<input type="radio" value='1' checked={this.state.sex===1} onChange={this.handleSex}>男</input>
             <input type="radio" value='2' checked={this.state.sex===2} onChange={this.handleSex}>女</input>
           </div>
           城市：<select onChange={this.handleCity}>
             {
               this.state.citys.map((item, key) => {
                 return <option key={key}>{item}</option>
               })
             }
            </select>*/}
           <input type="submit" defaultValue="提交"></input>
         </form>
       </div>
     )
   }
}

export default App;
