import createStore from './createStore';
import React from 'react';
import ReactDOM from 'react-dom';
const ADD = 'ADD';
const SUB = 'SUB';
let reducer = (state=0,action={})=>{
  switch (action.type){
    case ADD:
      return state + 1;
    case SUB:
      return state - 1;
    default:
      return state;
  }
}
let store = createStore(reducer);
class Counter extends React.Component{
  constructor(){
    super();
    this.state = {number:store.getState()};
  }
  componentWillMount(){
    store.subscribe(()=>{
      this.setState({number:store.getState()});
    })
  }
  render(){
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={()=>store.dispatch({type:ADD})}>+</button>
        <button  onClick={()=>store.dispatch({type:SUB})}>-</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter/>,document.querySelector('#root'));