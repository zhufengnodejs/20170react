//就是可以用来创建仓库的方法
let createStore = (reducer)=>{
  //状态树 ，整个应用只能有一个store,只能有一个状态树
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
  //就是为了获得初始状态
  dispatch();
  return {getState,dispatch,subscribe}
}
let combineReducers = (reducers)=>{
  //返回的还是一个reducer
  return function(state={},action={}){
     let newState = {};
     //{counter, todos}
    console.log(state);
    for(var attr in reducers){// key "counter","todos"
       //newState["counter"] = counter(state.counter,action);
       //newState["todos"] = counter(state.todos,action);
      console.log(state[attr]);
      newState[attr] = reducers[attr](state[attr],action);
     }
     return newState;
  }
}

export  {createStore,combineReducers};