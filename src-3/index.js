import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Post extends Component {
  handleClick = (event)=>{
    console.log(parseInt(window.getComputedStyle(event.target,null).height));
  }
  render () {
    return (
      <p style={{border:'1px solid red'}} onClick={this.handleClick}>
        {this.props.content}
      </p>
    )
  }
}
ReactDOM.render(<Post content="a"/>, root);