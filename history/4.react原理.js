import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 1. React是一个用户界面的库
 * 2. React元素 JSX元素 其实就是一个用JS来描述界面的对象
 * <div><span>hello</span></div>
 **/
ReactDOM.render(<div>
    <span>hello</span>
</div>, document.querySelector('#root'));
//经过webpack 转译后变成下列形式
ReactDOM.render(
    React.createElement('div',null,[React.createElement('span',null,['hello'])])
    , document.querySelector('#root'));
/*{
    type:'div',
    props:{
        children:[
            {
                type:'span',
                props:{
                    chidren:[
                        'hello'
                    ]
                }
            }
        ]
    }
}*/
