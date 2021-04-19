import React, {Component} from 'react'

class MenuContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   componentDidMount = ()=>{
       console.log(this.props)
   }
    render() { 
        return ( 
            <div>菜单</div>
         );
    }
}
 
export default MenuContent;