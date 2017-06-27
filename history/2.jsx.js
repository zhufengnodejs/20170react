import React from 'react';
import ReactDOM from 'react-dom';
//声明了一个React元素
let ele = <h1>hello</h1>;
console.log(ele);
//1.标签类型  属性对象 子元素
//1.此处写的属性名都要转成驼峰命名法 backgroundColor background-color
//2. 有些属性是JS关键字，要换种写法 class-className for-htmlFor
let _ele2 = React.createElement('div', {id: 1, className: 'red'}, ['hello']);
//let _ele2 = <div><span>hello</span></div>;
console.log(_ele2);
//最终的React元素是这样的
let eleObj = {
    type: 'div', props: {
        className: 'red',
        id: 1,
        children: ['hello',
            {type: 'span', props: {className: 'blue', children: ['word']}}
        ]
    }
};
function render(eleObj, container) {
    let {type, props} = eleObj;
    let ele = document.createElement(type);
    for (let attr in props) {
        if (attr == 'children') {
            props[attr].forEach(function (item) {
                if(typeof item == 'string'){
                    let textNode = document.createTextNode(item);
                    ele.appendChild(textNode);
                }else{
                    render(item,ele);
                }
            });
        } else if (attr == 'className') {
            ele.setAttribute('class', props[attr]);
        } else {
            ele.setAttribute(attr, props[attr]);
        }
    }
    container.appendChild(ele);
}
render(eleObj, document.querySelector('#root'));
