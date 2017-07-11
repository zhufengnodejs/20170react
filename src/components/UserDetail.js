import React, {Component} from 'react';
export default class UserDetail extends Component {
  constructor() {
    super();
    this.state = {user: {}};
  }

  componentWillMount() {
    let id = this.props.match.params.id;
    let usersStr = localStorage.getItem('users');
    let users = usersStr ? JSON.parse(usersStr) : [];
    let user = users.find(item => item.id == id);
    this.setState({user});
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead>
        <tr>
          <th>ID</th>
          <th>用户名</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{this.state.user.id}</td>
          <td>{this.state.user.username}</td>
        </tr>
        </tbody>

      </table>
    )
  }
}