import React,{Component} from 'react';
import {ADD_TODO} from '../action-types';
import store from '../store';
import {connect} from '../react-redux';
class Todo extends Component{
    handleChange = (event)=>{
      if(event.keyCode == 13){
        let title = event.target.value;
        this.props.addTodo(title);
        event.target.value = '';
      }
    }
    render(){
        return (
            <div>
                <input type="text" onKeyDown={this.handleChange}/>
                <ul>
                  {
                      this.props.list.map((item,index)=>(
                        <li key={index}>{item}</li>
                      ))
                  }
                </ul>
            </div>
        )
    }
}
export default connect()(Todo);