import React,{Component} from 'react';
import store from '../store';
import {ADD} from '../store/action-types';
export default class Counter extends Component{
  constructor(){
    super();
    this.state = {number:store.getState().counter.number};
  }
  componentWillMount(){
    store.subscribe(()=>{
      this.setState({number:store.getState().counter.number});
    })
  }
  render(){
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={()=>store.dispatch({type:ADD})}>+</button>
      </div>
    )
  }
}