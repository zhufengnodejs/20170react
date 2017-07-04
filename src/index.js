import React, {Component} from 'react';
class PercentageShower extends Component {
  render(){
    return (
      <div>

      </div>
    )
  }
}
class Input extends Component {
  render() {
    return <input type="number"/>
  }
}
class PercentageApp extends Component {
  render() {
    return (
      <div>
        <Input/>
        <PercentageShower/>
      </div>
    )
  }
}
