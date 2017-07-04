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
  handleChange = (event) => {
    this.props.change((event.target.value * 100).toFixed(2) + '%');
  }

  render() {
    return <input type="number" onChange={this.handleChange}/>
  }
}
class PercentageApp extends Component {
  constructor(props) {
    super();
    //定义一个默认状态
    this.state = {percent: '30%'};
  }

  change = (percent) => {
    this.setState({percent});
  }

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