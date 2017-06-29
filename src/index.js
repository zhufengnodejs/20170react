import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
/**
 * 1.组件的完整生命周期
 * 2.一些代码的编写的顺序
 **/
class Counter extends Component{
    constructor(){
        super();
        this.state = {num:0};
    }
    //组件将要被挂载
    componentWillMount(){
       console.log('1.componentWillMount 组件将要被挂载 ');
    }
    handleClick = ()=>{
        //setState方法是异步的，所以不能在赋值之后立即获取最新的state值，可以在回调函数中获取新的状态值
        this.setState({
            num:this.state.num+1
        },()=>{
            console.log(this.state.num);
        });
    }
    //newProps 新的属性对象
    //newState 新的状态对象
    shouldComponentUpdate(newProps,newState){
        console.log('4.shouldComponentUpdate 组件是否要进行更新');
        if(newState.num%5===0){
            return true;
        }else{
            return false;
        }
    }
    componentWillUpdate(){
        console.log('5.componentWillUpdate 组件将要更新');
    }
    componentDidUpdate(){
        console.log('6.componentDidUpdate 组件更新结束');
    }
    render(){
        console.log('2.render 组件挂载');
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
    componentDidMount(){
        console.log('3.componentDidMount 组件挂载完成');
    }
}
render(<Counter/>,window.app);