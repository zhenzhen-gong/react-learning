import React, {Component} from 'react'

class NewsContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount = ()=>{
        console.log(this.props.match.prams.aid)
    }

    render() { 
        return ( 
            <div>新闻详情页</div>
         );
    }
}
 
export default NewsContent;