let initState = {
  color:'white'
}
//改变颜色
let CHANGE_COLOR = 'CHANGE_COLOR';

//就是可以用来创建仓库的方法
let createStore = (reducer)=>{
  //状态
  let state;
  //存放所有的监听函数
  let listeners = [];
  //获取状态对象
  let getState = ()=>state;
  //提供一个方法，供外部调用，派发action
  let dispatch = (action)=>{
    //调用管理员reducer ,得到新的state
    state = reducer(state,action);
    //执行所有的监听函数
    listeners.forEach(l=>l());
  }
  //订阅状态变化事件，当状态发生改变之后执行监听函数
  let subscribe = (listener)=>{
    listeners.push(listener);
  }
  return {getState,dispatch,subscribe}
}
//管理员 接收老的状态和action,返回新的状态
let reducer = (state=initState,action={})=>{
  switch(action.type){
    case CHANGE_COLOR:
      return {color:action.color};
    default:
      return state;
  }
}
let store = createStore(reducer);



