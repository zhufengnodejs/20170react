import {createStore,combineReducers} from './redux';
import {ADD, SUB, ADD_TODO} from './action-types';
//处理计数器
let counter = (state = {number: 0}, action = {}) => {
  switch (action.type) {
    case ADD:
      return {number: state.number + 1};
    case SUB:
      return {number: state.number - 1};
    default:
      return state;
  }
}
//管理留言
let todos = (state = {list: []}, action = {}) => {
   switch(action.type){
     case ADD_TODO:
       //永远不要修改原来的状态对象，只能返回一个全新的对象
       //state.list.push(action.text);
       return [...state.list,action.text];
     default:
       return state;
   }
}
//合并成后的reducer还是一个reducer
let reducer = combineReducers({
  counter,
  todos
});
let store = createStore(reducer);
export default store;