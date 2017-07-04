import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  render(){
    return (
      <ul>
        {
          React.Children.map(this.props.children,(item,index)=>(
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    )
  }
}
//子元素也是属性的一种，因为它也是从父组件传下来的
ReactDOM.render(<App>
  <span>中</span>
</App>, root);

<ul>
  <li><span>大</span></li>
  <li><span>中</span></li>
  <li><span>小</span></li>
</ul>