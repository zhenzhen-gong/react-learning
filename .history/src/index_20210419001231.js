import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import './index.css';
import './index.less'
import Home from './component/qianTaoRouter/home';
import UserCenter from './component/qianTaoRouter/userCenter';
import HandleCenter from './component/qianTaoRouter/handleCenter';
// import NewsContent from './component/routerTest/newsContent'
// import MenuContent from './component/routerTest/menuContent'
// import Login from './component/routerTest/login'
import reportWebVitals from './reportWebVitals';

let route = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user',
    component: Home
  },
  {
    path: '/handle',
    component: Home
  }
]

ReactDOM.render(
  <Router>
    <ul className="tab-box">
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/user">用户中心</Link>
          </li>
          <li>
            <Link to="/handle">操作中心</Link>
          </li>
    </ul>
    {/*
     <Route path='/'> <Home /> </Route>
    <Route path='/news'> <News /> </Route>
    <Route path='/memu'>  <Memu /> </Route>
     */}
     {/*exact 为严格匹配*/}
     <Route exact  path='/' component={Home} />
    <Route path='/user' component={UserCenter} />
    <Route path='/handle' component={HandleCenter} />
    
    {/*<Route path='/content/:aid' component={NewsContent} />
    <Route path='/menucontent' component={MenuContent} />
    <Route path='/login' component={Login} /> */}
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
