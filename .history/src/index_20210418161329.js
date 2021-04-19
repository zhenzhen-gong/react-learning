import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import './index.css';
import Home from './component/routerTest/home';
import News from './component/routerTest/news';
import Memu from './component/routerTest/memu';
import NewsContent from './component/routerTest/newsContent'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    {/*
     <Route path='/'> <Home /> </Route>
    <Route path='/news'> <News /> </Route>
    <Route path='/memu'>  <Memu /> </Route>
     */}
     {/*exact 为严格匹配*/}
     <Route exact  path='/' component={Home} />
    <Route path='/news' component={News} />
    <Route path='/memu' component={Memu} />
    <Route path='/content' component={NewsContent} />

    <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news/:api">News</Link>
          </li>
          <li>
            <Link to="/memu">Memu</Link>
          </li>
          <li>
            <Link to="/content"></Link>
          </li>
    </ul>
    
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
