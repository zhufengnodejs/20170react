import React,{Component} from 'react';
import {ADD_TODO} from '../action-types';
import store from '../store';
export default class Todo extends Component{
    constructor(){
      super();
      this.state = {list:store.getState().todos.list};
    }
    componentWillMount(){
        this.unSubscribe = store.subscribe(()=>{
            this.setState({
              list:store.getState().todos.list
            });
        })
    }
    componentWillUnmount(){
        this.unSubscribe();
    }
    handleChange = (event)=>{
      if(event.keyCode == 13){
        let title = event.target.value;
        store.dispatch({type:ADD_TODO,title});
        event.target.value = '';
      }
    }
    render(){
        return (
            <div>
                <input type="text" onKeyDown={this.handleChange}/>
                <ul>
                  {
                      this.state.list.map((item,index)=>(
                        <li key={index}>{item}</li>
                      ))
                  }
                </ul>
            </div>
        )
    }
}