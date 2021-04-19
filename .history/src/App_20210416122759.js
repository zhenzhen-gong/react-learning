import React, {Component} from 'react'
import './app.less' // 未生效，因为缺少loader转换的配置
import './App.css';

class App extends Component {
   constructor(props) {
     super(props)
     this.state= {
       name: '学习React',
       inputval: ''
     }
   }
   render() {
     return (
       <div className="context">
         <h1>{this.state.name}</h1>
         <div className="input-test">
           <input type="text" value={this.state.inputval} onChange={this.handleInputval}></input>
           <p>{this.state.inputval}</p>
         </div>
       </div>
     )
   }
}

export default App;
