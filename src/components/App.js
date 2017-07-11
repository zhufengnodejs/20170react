import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//BrowserRouter HashRouter 浏览器路由容器
import {
  BrowserRouter as Router,//路由容器 app
  Route,//是单条路由 app.get()
  Link //菜单导航，超链接
} from 'react-router-dom';
import Home from './Home';
import User from './User';
import Profile from './Profile';
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <div className="navbar-brand">
                  <Link to="/">珠峰管理系统</Link>
                </div>
              </div>
              <ul className="nav navbar-nav">
                <li><Link to="/">首页</Link></li>
                <li><Link to="/user">用户管理</Link></li>
                <li><Link to="/profile">个人设置</Link></li>
              </ul>
            </div>
          </nav>
          <div className="container">
                <Route exact={true} path="/" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/profile" component={Profile}/>
          </div>
        </div>
      </Router>
    )
  }
}