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
store.subscribe(()=>{
  ReactDOM.render(<Counter/>,document.querySelector('#root'));
})
class Counter extends React.Component{
  render(){
    return (
      <div>
        <p>{store.getState()}</p>
        <button onClick={()=>store.dispatch({type:ADD})}>+</button>
        <button onClick={()=>store.dispatch({type:SUB})}>-</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter/>,document.querySelector('#root'));