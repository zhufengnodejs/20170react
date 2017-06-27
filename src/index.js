import React from 'react';
import ReactDOM from 'react-dom';
let names = ['大毛', '', '三毛'];
//{}里放的是JS表达式，表达式是由变量的运行符组合而成
// 1+1 a+b fn(1)  必须返回一个值
//Warning: Each child in an array or iterator should have a unique "key" prop
let style = {backgroundColor:'pink'};
ReactDOM.render(<div>
    {
        names.map(function (item,index) {
            return item.length>0?<span style={style} className="red" key={index}>{item}</span>:null
        })
    }
</div>, document.querySelector('#root'));