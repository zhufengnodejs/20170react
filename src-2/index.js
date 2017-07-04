import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class PercentageShower extends Component {
  render() {
    return (
      <div>
        {this.props.percent}
      </div>
    )
  }
}
class Input extends Component {
  //this指向Input组件实例
  handleChange = (event) => {
    this.props.change((event.target.value * 100).toFixed(2) + '%');
  }

  render() {
    return <input type="number" onChange={this.handleChange}/>
  }
}
//react单向数据流 数据只能通过属性的方式从父组件传递给子组件
class PercentageApp extends Component {
  constructor(props) {
    super();
    //定义一个默认状态 父组件的状态对象
    this.state = {percent: '30%'};
  }
  //特地用了箭头函数 定义的时候this就绑死了 绑定为父组件PercentageApp的实例
  change = (percent) => {
    this.setState({percent});
  }
  //组件的setState之后一定会重新render
  render() {
    return (
      <div>
        <Input change={this.change}/>
        <PercentageShower percent={this.state.percent}/>
      </div>
    )
  }
}
ReactDOM.render(<PercentageApp/>, root);