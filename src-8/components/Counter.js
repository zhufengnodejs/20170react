import React,{Component} from 'react';
import store from '../store';
import {ADD,SUB} from '../action-types';
export default class Counter extends Component{
    constructor(props){
      super(props);
      this.state = {number:store.getState().counter.number};//定义默认状态对象
    }
    //当组件将要挂载到页面中的时候
    componentWillMount(){
      //订阅方法会返回一个取消订阅的函数
      this.unSubscribe = store.subscribe(()=>{
        this.setState({number:store.getState().counter.number});
      });
    }
    //将组件要被销毁的时候
    componentWillUnmount(){
      console.log('Count ComponentWillUnmount');
      this.unSubscribe();
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={()=>store.dispatch({type:ADD})}>+</button>
                <button  onClick={()=>store.dispatch({type:SUB})}>-</button>
            </div>
        )
    }
}