//创建仓库 reducer就是管理员，用来从老状态和action得到新状态
let createStore =(reducer)=>{
 //状态树 stateTree 可以是任意类型 {}
 let state;
 //缓存所有的监听函数
 let listeners = [];
 //返回当前状态
 let getState = ()=>state;
 //派发/发射action
 //action是对象类型，type属性必须有，其它属性可选
 let dispatch = (action)=>{
   //store接收到action之后，会返回新的状态
   state = reducer(state,action);
   //通知所有的订阅者
   listeners.forEach(listener=>listener());
 }
 //订阅仓库的状态变化事件
 let subscribe = (listener)=>{
   listeners.push(listener);
   return function(){
     listeners.filter(l=>l!=listener);
   }
 }
 //先在仓库内部调用一次dispatch获得初始值
 dispatch();
 return {
   getState,dispatch,subscribe
 }
}

export {createStore};