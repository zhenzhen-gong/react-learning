import React, {Component} from 'react'
import Axios from 'axios'

class axios extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: []
     }
  }

  getData = ()=>{
     // 通过axios获取服务器数据
     var api = 'http://www.phonegap100.com/appapi.php?a=getportalList&catid=20'

     Axios.get(api).then((res) => {
        console.log(res)
     }).catch((err) => {
      console.log(err)
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
 
export default axios;