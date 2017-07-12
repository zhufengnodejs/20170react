import React from 'react';
import {Redirect,Route} from 'react-router-dom';
// Redirect重定向
export default ({path,component:Component})=>{
  return (
    <Route path={path} render={()=>localStorage.getItem('user')?<Component/>:<Redirect to={{
      pathname:'/login',
      state:{from:path}
    }}/>}/>

  )
}