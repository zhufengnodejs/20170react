import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
function map(items,fn){
  if(!items instanceof Array)
    items = [items];
  return items.map(fn);
}
class BlackBorderContainer extends Component {
  render(){
    return (
      <div>
        {
          React.Children.map(this.props.children,(item,index)=>(
            <div key={index} className="black-border">{item}</div>
          ))
        }
      </div>
    )
  }
}

ReactDOM.render(<BlackBorderContainer>
  <div className='name'>My Name：Lucy</div>
  <p className='age'>
    My Age：<span>12</span>
  </p>
</BlackBorderContainer>,root);