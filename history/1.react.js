import React from 'react';
import ReactDOM from 'react-dom';
let ele = <h1>hello</h1>;





//render的含义就是把一个React元素渲染到DOM容器内部
//jsx javascript+html(xml一种) 的混合写法
ReactDOM.render(
    <h1>hello</h1>,
    document.querySelector('#root')
);

/*
//react元素是通过JS对象来描述DOM结构的一种数据结构
/!*{
    tagName:'h1',
    attr:null,
    children:['hello']
}*!/
ReactDOM.render(
    React.createElement('h1',null,['hello'])
);*/
