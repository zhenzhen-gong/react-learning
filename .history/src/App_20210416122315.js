import React, {Component} from 'react'
import './app.less'
import './App.css';

class App extends Component {
   constructor(props) {
     super(props)
     this.state= {
       name: '学习React'
     }
   }
   render() {
     return (
       <div className="context">
         <h1>{this.state.name}</h1>
       </div>
     )
   }
}

export default App;
