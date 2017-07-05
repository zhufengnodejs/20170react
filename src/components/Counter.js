import React,{Component} from 'react';
import store from '../store';
export default class Counter extends Component{
    render(){
        return (
            <div>
                <p>{}</p>
                <button>+</button>
                <button>-</button>
            </div>
        )
    }
}