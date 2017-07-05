import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
/**
 * context 上下文
 */
class App extends Component{
  //定义子组件上下文类型对象
  static childContextTypes = {
     color:PropTypes.string,
     changeColor:PropTypes.func
  }
  //返回子组件上下文对象
  getChildContext(){
    return {color:this.state.color,changeColor:this.changeColor};
  }
  constructor(){
    super();
    this.state = {color:'orange'};
  }
  changeColor = (color)=>{
    this.setState({color});
  }
  render(){
    return (
      <div>
        <Title/>
        <Content/>
      </div>
    )
  }
}
class Title extends Component{
  //这是必须写的，只有规定好了，才能得到上下文对象
  static contextTypes = {
    color:React.PropTypes.string
  }

  render(){
    console.log(this.context);
    return (
      <div style={{color:this.context.color}} >标题</div>
    )
  }
}
class Theme extends Component{
  static contextTypes = {
    color:React.PropTypes.string,
    changeColor:PropTypes.func
  }
  render(){
    return (
      <div>
        <span style={{color:this.context.color}}>主题</span>
        <button onClick={()=>this.context.changeColor('red')}>红色</button>
        <button onClick={()=>this.context.changeColor('green')}>绿色</button>
      </div>
    )
  }
}
class Content extends Component{
  static contextTypes = {
    color:PropTypes.string,
    changeColor:PropTypes.func
  }
  render(){
    return (
      <div>
        <span style={{color:this.context.color}}>内容</span>
        <Theme/>
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.querySelector('#root'));