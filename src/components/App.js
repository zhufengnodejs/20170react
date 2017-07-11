import React, {Component} from 'react';
import './App.css'
import actions from '../store/actions';
import {connect} from 'react-redux';
class App extends Component {
  handleChange = (event)=>{
    //先获取到关键字
    let keyword = event.target.value;
    //然后进行搜索
    this.props.search(keyword);
  }
  render() {
    return (
      <div className="container">
        <div className="search-area">
          <div className="logo">
            <img src="http://t.cn/RU9vHxQ" />
          </div>
          <div className="search">
            <input type="text" onChange={this.handleChange}/>
            <span>百度一下</span>
          </div>
        </div>
        <ul className="words">
          {
            this.props.words.map((word,index)=>(<li className="word" key={index}>{word}</li>))
          }
          <li className="word">联想词</li>
        </ul>
      </div>
    )
  }
}
//把store里的状态映射为属性对象
let mapStateToProps = state=>state;
let mapDispatchToProps = actions;

export default connect(mapStateToProps,mapDispatchToProps)(App)