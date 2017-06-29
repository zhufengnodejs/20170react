import React, {Component} from 'react';
import './slider.css';
export default class Slider extends Component {
 render() {
  return (
   <div className="slider-wrapper">
    <ul className="sliders">
     {
      this.props.items.map((item,index)=>(
       <li className="slider"><img src={item.src}/></li>
      ))
     }
    </ul>
   </div>
  )
 }
}