import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
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
        <Title {...this.state}/>
        <Content changeColor={this.changeColor} {...this.state}/>
      </div>
    )
  }
}
class Title extends Component{
  render(){
    return (
      <div style={{color:this.props.color}} >标题</div>
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