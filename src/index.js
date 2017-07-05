import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
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
  render(){
    return (
      <div>标题</div>
    )
  }
}
class Theme extends Component{
  render(){
    return (
      <div>
        <button>红色</button>
        <button>绿色</button>
      </div>
    )
  }
}
class Content extends Component{
  render(){
    return (
      <div>
        <span>内容</span>
        <Theme/>
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.querySelector('#root'));