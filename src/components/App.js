import React,{Component} from 'react';
import Counter from './Counter';
import Todo from './Todo';
export default class App extends Component{
    render(){
        return (
            <div>
              <Counter/>
              <Todo/>
            </div>
        )
    }
}