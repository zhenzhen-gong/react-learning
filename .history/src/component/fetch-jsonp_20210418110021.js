import React, {Component} from 'react'
import fetchJsonp from 'fetch-jsonp'

class FetchJsonp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: []
     }
  }

  getData = ()=>{
     // 通过jetch-jsonp获取服务器数据
     fetchJsonp('/users.jsonp')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })    
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
 
export default FetchJsonp;