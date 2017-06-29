import React, {Component} from 'react';
export default class Home extends Component {
 render() {
  let style = {
   width:this.props.items.length*500,
   left:this.props.index*-500,
   transitionDuration:this.props.speed+'s'
  }
  return (
   <ul style={style} className="sliders">
    {
     this.props.items.map((item, index) => (
      <li key={index} className="slider">
          <img src={item.src}/>
      </li>
     ))
    }
   </ul>
  )
 }
}