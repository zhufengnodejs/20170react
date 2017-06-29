import React, {Component} from 'react';
import './slider.css';
import SliderItems from './SliderItems';
export default class Slider extends Component {
 constructor(){
  super();
  //通过修改此index值就可以改变ul的left值
  this.state = {index:0};
 }
 //传入步长，得到新的index值
 turn = (step)=>{
  let index = this.state.index + step;
  if(index >= this.props.items.length){
     index = 0;
  }
  this.setState({index});
 }
 //启动自动轮播
 go =()=>{
  this.$timer = setInterval(()=>{
   this.turn(1);
  },this.props.delay*1000);
 }
 componentDidMount(){
  //如果自动轮播为true,开启自动轮播
  if(this.props.auto){
    this.go();
  }
 }
 render() {

  return (
   <div className="slider-wrapper">
     <SliderItems items={this.props.items} index={this.state.index} speed={this.props.speed}/>
   </div>
  )
 }
}