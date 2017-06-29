import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
//复合组件
class Panel extends Component{
   constructor(){
       super();
       this.state = {color:'black'};
   }
   render(){
       return (
           <div className="panel panel-default">
               <button onClick={()=>this.setState({color:'red'})}>红</button><button onClick={()=>this.setState({color:'green'})}>绿</button>
               <PanelHead color={this.state.color} head={this.props.head}/>
               <PanelBody body={this.props.body}/>
               <PanelFooter footer={this.props.footer}/>
           </div>
       )
   }
}

class PanelHead extends Component{
   render(){
       return <div style={{color:this.props.color}} className="panel-heading">{this.props.head}</div>
   }
}
class PanelBody extends Component{
    render(){
        return <div className="panel-body">{this.props.body}</div>
    }
}
class PanelFooter extends Component{
    render(){
        return <div className="panel-footer">{this.props.footer}</div>
    }
}
render(<Panel head="头" body="体" footer="尾"/>,window.app);