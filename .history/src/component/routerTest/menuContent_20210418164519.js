import React, {Component} from 'react'
import Url from 'url'

class MenuContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: ''
         }
    }
   componentDidMount = ()=>{
       console.log(Url.parse(this.props.location.search,true))
       var tooltitle = Url.parse(this.props.location.search,true)
       this.setState({
           title: tooltitle.query.aid
       })
   }
    render() { 
        return ( 
            <div>{this.state.title}级菜单详情</div>
         );
    }
}
 
export default MenuContent;