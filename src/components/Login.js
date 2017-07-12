import React from 'react';
export default class Login extends React.Component{
  handleSubmit = ()=>{
    let username = this.refs.username.value;
    localStorage.setItem('user',username);
    console.log(this.props);
    this.props.history.push(this.props.location.state.from);
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">用户名</label>
          <input ref="username" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <button type="text" className="btn btn-primary">登录</button>
        </div>
      </form>
    )
  }
}