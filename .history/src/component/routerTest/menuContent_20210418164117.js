import React, {Component} from 'react'
import Url from 'url'

class MenuContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   componentDidMount = ()=>{
       console.log(this.props.location.search)
       console.log(Url.parse(this.props.location.search,true))
       
   }
    render() { 
        return ( 
            <div>菜单</div>
         );
    }
}
 
export default MenuContent;