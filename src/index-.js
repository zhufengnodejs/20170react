import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
/**
 * 生成一个高阶组件的函数 其实就是外层组件
 * 可以接收一个普通的组件
 **/
import connect from './react-redux';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.sub}>-</button>
      </div>
    )
  }
}
//这是一个转换映射函数，把一个state,也就是redux状态树映射为组件的状态对象 {number:0}//function a(){}
let mapStateToProps = state => (state.counter)
//把store的dispatch方法映射为一个对象
let mapDispatchToProps = dispatch => (
  {
    add:()=>dispatch({type:'ADD'}),
    sub:()=>dispatch({type:'SUB'})
  }
)
let NewCounter = connect(mapStateToProps,mapDispatchToProps)(Counter);
ReactDOM.render(<NewCounter/>, document.querySelector('#root'));