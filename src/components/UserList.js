import React,{Component} from 'react';
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

        }
      </ul>
    )
  }
}