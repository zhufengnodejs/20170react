import React,{Component} from 'react';
import {render} from 'react-dom';
class Sum extends Component{
    constructor(){
        super();
        this.state = {a:100,b:100}
    }
    handleChange = (event,attr)=>{
        //当setstate的时候，如果新的状态对象不包含老状态的一些属性，那么老属性的值则保持不变
        this.setState({
            attr:parseInt(event.target.value)
        });
        //{...this.state,{...newState}}
    }
    render(){
       // let a = 11;
        return (
            <div>
                <input type="text" value={this.state.a} onChange={event=>this.handleChange(event,a)}/>+
                <input type="text" value={this.state.b} onChange={event=>this.handleChange(event,'b')}/>=
                <input type="text" value={this.state.a+this.state.b}/>
            </div>
        )
    }
}
render(<Sum/>,window.app);