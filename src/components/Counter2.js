import React,{Component} from 'react';
import store from '../store';
import {ADD,SUB} from '../action-types';
import {connect} from '../react-redux';
class Counter extends Component{
    render(){
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={()=>this.props.add()}>+</button>
                <button  onClick={()=>this.props.sub()}>-</button>
            </div>
        )
    }
}

export default connect()(Counter);