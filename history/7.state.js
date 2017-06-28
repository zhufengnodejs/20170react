import React,{Component} from 'react';
import {render} from 'react-dom';
//计时器 Clock
//通过类来声明组件 类需要继承自Component
class Clock extends Component{
  constructor(){
    super();
    //自定义组件状态对象
    //状态可以用来存放组件内部一些变化的值。状态只能由内部初始化，内部改变
    this.state = {time:new Date().toLocaleString()};
  }
  //生命周期函数 组件挂载完成
  componentDidMount(){
      //每隔一秒钟会重新修改状态，当调用setState之后，状态会更新，还会再次调用render方法进行重新渲染
     window.setInterval(()=>{
         this.setState({time:new Date().toLocaleString()});
     },1000);
  }
  //render方法指的是该组件将要如何渲染，一定要返回一个React元素，而且只能返回一个React元素
  render(){
    return <h1><span>hello</span><span>{this.state.time}</span></h1>;
  }
}
render(<Clock/>,window.app);
