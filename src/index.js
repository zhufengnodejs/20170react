import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
/**
 * 生成一个高阶组件的函数 其实就是外层组件
 * 可以接收一个普通的组件
 **/

let connect = (mapStateToProps,mapDispatchToProps) => (_component) => {
  class Proxy extends React.Component {
    constructor() {
      super();
      //把状态树映射为当前Proxy组件的state，也就是_component的属性
      this.state = mapStateToProps(store.getState());
    }

    componentWillMount() {
      this.unSubscribe = store.subscribe(() => {
        this.setState(mapStateToProps(store.getState()));
      })
    }

    componentWillUnmount() {
      this.unSubscribe();
    }

    //{...this.state} 就是把this.state的属性全部展开传给_component
    render() {
      return <_component
        {...mapDispatchToProps(store.dispatch)}
        {...this.state}/>
    }
  }
  return Proxy;
}

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
//这是一个转换映射函数，把一个state,也就是redux状态树映射为组件的状态对象 {number:0}
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