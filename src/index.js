import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
/**
 * 生成一个高阶组件的函数 其实就是外层组件
 * 可以接收一个普通的组件
 **/
let highOrder = (_component) => {
  class Proxy extends React.Component{
    constructor(){
      super();
      this.state = {number:store.getState().counter.number};
    }
    componentWillMount(){
      this.unSubscribe = store.subscribe(()=>{
        this.setState({number:store.getState().counter.number});
      })
    }
    componentWillUnmount(){
      this.unSubscribe();
    }
    //{...this.state} 就是把this.state的属性全部展开传给_component
    render(){
      return <_component
        add={()=>store.dispatch({type:'ADD'})}
        sub={()=>store.dispatch({type:'SUB'})}
        {...this.state}/>
    }
  }
  return Proxy;
}

class Counter extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.sub}>-</button>
      </div>
    )
  }
}
let NewCounter = highOrder(Counter);
ReactDOM.render(<NewCounter/>,document.querySelector('#root'));