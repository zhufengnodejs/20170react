import React from 'react';
import {Route,Link} from 'react-router-dom';
//不管是否匹配都会显示指定的内容
/**
 * this.props
 * history 操作路径 history.push('/newpath');
 * match 如果匹配上，就有值，params路径参数
 * location pathname路径名
 * children 不管路径是否匹配，都会显示
 */
export default ({to,label}) =>(
  <Route exact={true} path={to} children={({match})=>(
    <li className={match?'active':''}>
      <Link to={to}>{label}</Link>
    </li>
  )} />
)