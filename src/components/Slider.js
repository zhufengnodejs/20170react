import React, {Component} from 'react';
import './slider.css';
export default class Slider extends Component {
 constructor(){
  super();
  //通过修改此index值就可以改变ul的left值
  this.state = {index:0};
 }
 //传入步长，得到新的index值
 turn = (step)=>{
  let index = this.state.index + step;
  this.setState({index});
 }
 componentDidMount(){
  //如果自动轮播为true,开启自动轮播
  if(this.props.auto){
    this.$timer = setInterval(()=>{
      this.turn(1);
    },this.props.delay*1000)
  }
 }
 render() {
  let style = {
    width:this.props.items.length*500,
    left:this.state.index*-500,
    transitionDuration:this.props.speed+'s'
  }
  return (
   <div className="slider-wrapper">
    <ul style={style} className="sliders">
     {
      this.props.items.map((item,index)=>(
       <li key={index} className="slider"><img src={item.src}/></li>
      ))
     }
    </ul>
   </div>
  )
 }
}