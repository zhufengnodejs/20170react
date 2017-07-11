//中间件其实核心是对dispatch的增强
//redux的中间件和express中间件原理不一样。但是跟koa中间件原理相似
import {createStore, applyMiddleware} from './redux';
const ADD = 'ADD';
let reducer = (state = {number: 0}, action = {}) => {
  switch (action.type) {
    case ADD:
      return {number: state.number + 1};
    default:
      return state;
  }
}
let logger = store => next => action => {
  console.log('老状态', store.getState());
  next(action);
  //store.dispatch(action);
  console.log('新状态', store.getState());
}
/*let logger = function({getState,dispatch}){
 return function(next){//store.dispatch
 //最后要返回一个增强后的dispatch方法
 return function (action){

 }
 }
 }*/
let store = applyMiddleware(logger)(createStore)(reducer);
//store.dispatch=
//let store = createStore(reducer);
function render() {
  document.querySelector('#root').innerHTML = `
<p id="number">${store.getState().number}</p>
<button id="addBtn">+</button>
`;
  document.querySelector('#addBtn').addEventListener('click', function () {
    //console.log('老状态',store.getState());
    store.dispatch({type: ADD});
    //console.log('新状态',store.getState());
  })
}
render();
store.subscribe(render);



