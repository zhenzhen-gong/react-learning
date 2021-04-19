import React, {Component} from 'react'
import { Link, Router } from "react-router-dom";

import NewsContent from './newsContent'


class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "News组件",
            list: [
                {
                    api:"01",
                    title: '01新闻'
                },
                {
                    api:"02",
                    title: '02新闻'
                },
                {
                    api:"03",
                    title: '03新闻'
                },
                {
                    api:"04",
                    title: '04新闻'
                }
            ]
        }
    }
    
   
    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <hr />
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            return <li key={key}><Link to={`/news/${value.api}`}>{value.title}</Link></li>
                                
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default News;