import React, {Component} from 'react';
//BrowserRouter HashRouter 浏览器路由容器
import {
  HashRouter as Router,//路由容器 app
  Route,//是单条路由 app.get()
  Link //菜单导航，超链接
} from 'react-router-dom';
function Home(){
  return <div>Home</div>
}
function User(){
  return <div>User</div>
}
function Profile(){
  return <div>Profile</div>
}
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home}/>
          <Route path="/user" component={User}/>
          <Route path="/profile" component={Profile}/>
        </div>
      </Router>
    )
  }
}