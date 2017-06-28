import React,{Component} from 'react';
import {render} from 'react-dom';
// 非受控组件 非受控元素，值不受状态控制
class Sum extends React.Component{
    handleChange = (event)=>{
        let a = parseInt(this.a.value||0);
        let b = parseInt(this.b.value||0);
        this.result.value = a+b;
    }
    render(){
        //ref等于一个函数，表示当元素被挂载到页面中之后会立即 调用此函数，并传入渲染后的DOM元素
        return (
            <div onChange={this.handleChange}>
                <input ref={ref=>this.a=ref} type="text" />+
                <input ref={ref=>this.b=ref} type="text" />=
                <input ref={ref=>this.result=ref} type="text"/>
            </div>
        )
    }
}
//当我们去用ReactDOM去渲染Sum组件的时候才会去创建Sum类的实例，然后调用render方法得到一个顶级的React元素，然后把把此React元素转换成真实的DOM对象，并插入到容器里
render(<Sum/>,window.app);