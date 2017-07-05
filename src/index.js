import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 生成一个高阶组件的函数 其实就是外层组件
 * 可以接收一个普通的组件
 **/
let highOrder = (_component) => {
  class Proxy extends React.Component{

  }
  return Proxy;
}

class Counter extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.number}</p>
        <button>+</button>
      </div>
    )
  }
}
let newCounter = highOrder(Counter);
ReactDOM.render(newCounter,document.querySelector('#root'));