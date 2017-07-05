import {createStore} from 'redux';
const ADD = 'ADD';//+1
const SUB = 'SUB';
const ADD_TODO = 'ADD_TODO';
//计数器的reducer
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

//reducer是一个函数
let reducer = (state = {counter: {number: 0}, todos: {list: []}}, action = {}) => {
  switch (action.type) {
    case ADD:
      return {counter: {number: state.counter.number + 1}, todos: state.todos}
  }
}
createStore(reducer);