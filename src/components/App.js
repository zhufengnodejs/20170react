import React, {Component} from 'react';
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="logo">
          <img src="http://t.cn/RU9vHxQ" />
        </div>
        <div className="search">
          <input type="text"/>
          <span>百度一下</span>
        </div>
      </div>
    )
  }
}