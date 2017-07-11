import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class UserList extends Component{
  constructor(){
    super();
    this.state = {users:[]};
  }
  componentWillMount(){
    let usersStr = localStorage.getItem('users');
    let users = usersStr?JSON.parse(usersStr):[];
    this.setState({users});
  }
  render(){
    return (
      <ul>
        {
           this.state.users.map((item,index)=>(
             <li key={index} className="list-group-item">
               <Link to={"/user/detail/"+item.id}>{item.username}</Link>
             </li>
           ))
        }
      </ul>
    )
  }
}