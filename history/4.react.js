import React from 'react';
import ReactDOM from 'react-dom';
//React是由 React元素 React组件
//1.首字母小写，凡是首字母小写的都会被认为是React元素
//Unknown prop `cls` on <div> tag. Remove this prop from the element
ReactDOM.render(<div cls="ee">hello
</div>, document.querySelector('#root'));
