import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import './index.css';
import Home from './component/qianTaoRouter/home';
import UserCenter from './component/qianTaoRouter/userCenter';
import HandleCenter from './component/qianTaoRouter/handleCenter';
// import NewsContent from './component/routerTest/newsContent'
// import MenuContent from './component/routerTest/menuContent'
// import Login from './component/routerTest/login'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/memu">Memu</Link>
          </li>
    </ul>
    {/*
     <Route path='/'> <Home /> </Route>
    <Route path='/news'> <News /> </Route>
    <Route path='/memu'>  <Memu /> </Route>
     */}
     {/*exact 为严格匹配*/}
     <Route exact  path='/' component={Home} />
    <Route path='/news' component={News} />
    <Route path='/memu' component={Memu} />
    <Route path='/content/:aid' component={NewsContent} />
    <Route path='/menucontent' component={MenuContent} />
    <Route path='/login' component={Login} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();