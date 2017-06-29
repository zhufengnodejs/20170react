import React,{Component} from 'react';
export default class MessageList extends Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.messages.map((message,index)=>(
                        <li className="list-group-item" key={index}>{message.username}:{message.content} <span className="pull-right">{message.createAt.toLocaleString()}</span></li>
                    ))
                }
            </ul>
        )
    }
}