import React,{Component} from 'react';
import Counter from './Counter2';
import Todo from './Todo2';
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