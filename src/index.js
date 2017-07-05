import React,{Component} from 'react';
import ReactDOM from 'react-dom';
/**
 * context 上下文
 *
 */
class App extends Component{
  //定义子组件上下文类型对象
  static childContextTypes = {
     color:React.PropTypes.string
  }
  //返回子组件上下文对象
  getChildContext(){
    return {color:'yellow'};
  }
  constructor(){
    super();
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
    return (
      <div style={{color:this.context.color}} >标题</div>
    )
  }
}
class Theme extends Component{
  render(){
    return (
      <div>
        <button onClick={()=>this.props.changeColor('red')}>红色</button>
        <button onClick={()=>this.props.changeColor('green')}>绿色</button>
      </div>
    )
  }
}
class Content extends Component{
  render(){
    return (
      <div>
        <span style={{color:this.props.color}}>内容</span>
        <Theme changeColor={this.props.changeColor}/>
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.querySelector('#root'));