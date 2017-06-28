import React,{Component} from 'react';
import {render} from 'react-dom';
// 非受控组件 非受控元素，值不受状态控制
class Sum extends React.Component{
    handleChange = (event)=>{
        let a = parseInt(this.refs.a.value||0);
        let b = parseInt(this.refs.b.value||0);
        this.refs.result.value = a+b;
    }
    render(){
        return (
            <div onChange={this.handleChange}>
                <input ref="a" type="text" />+
                <input ref="b" type="text" />=
                <input ref="result" type="text"/>
            </div>
        )
    }
}
render(<Sum/>,window.app);