import React,{Component} from 'react';
export default class UserAdd extends Component{
  /**
   * history 历史 操作路由的历史 跳转路径用的
   * location pathname 路径 state 自定义路径状态
   * match isExact 是否是精确匹配  path 当前路径 url 当前路径 params 路径参数对象
   */
  handleSubmit = (event)=>{
    event.preventDefault();
    let username = this.refs.username.value;
    let usersStr = localStorage.getItem('users');
    let users = usersStr?JSON.parse(usersStr):[];
    users.push({id:Date.now(),username});
    localStorage.setItem('users',JSON.stringify(users));
    this.props.history.push('/user/list');
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <button onClick={()=>this.props.history.goBack()} className="btn btn-success">返回</button>
        </div>
        <div className="form-group">
          <label htmlFor="username">用户名</label>
          <input ref="username" type="text" className="form-control" required={true}/>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary"/>
        </div>
      </form>
    )
  }
}