import React, {Component} from 'react'

class axios extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: []
     }
  }


  render() { 
    return ( 
        <div>
           <h3>axios请求</h3>
           <hr />
           <button onClick={this.getData}>用axios请求数据</button>
        </div>  
    );
  }
}
 
export default axios;