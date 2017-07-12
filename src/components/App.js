import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//BrowserRouter HashRouter 浏览器路由容器
import {
  HashRouter as Router,//路由容器 app
  Route,//是单条路由 app.get()
  Link //菜单导航，超链接
} from 'react-router-dom';
import Home from './Home';
import User from './User';
import Profile from './Profile';
import MenuLink from './MenuLink';
import Private from './Private';
import Login from './Login';
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <div className="navbar-brand">
                  <Link to="/">珠峰管理系统</Link>
                </div>
              </div>
              <ul className="nav navbar-nav">
                <MenuLink exact={true} to="/" label="首页"></MenuLink>
                <MenuLink exact={false} to="/user" label="用户管理"></MenuLink>
                <MenuLink exact={false} to="/profile" label="个人设置"></MenuLink>
              </ul>
            </div>
          </nav>
          <div className="container">
                <Route exact={true} path="/" component={Home}/>
                <Route path="/user" component={User}/>
                <Private path="/profile" component={Profile}/>
               <Route path="/login" component={Login}/>
          </div>
        </div>
      </Router>
    )
  }
}