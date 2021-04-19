import React, {Component} from 'react'

import './App.css';

class App extends Component {
   constructor(props) {
     super(props)
     this.state= {
       name: '张三'
     }
   }
   render() {
     return (
       <div>
         <p>{this.state.name}</p>
       </div>
     )
   }
}

export default App;
