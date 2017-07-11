//中间件其实核心是对dispatch的增强
//redux的中间件和express中间件原理不一样。但是跟koa中间件原理相似
import {createStore} from './redux';
const ADD = 'ADD';
let reducer = (state = {number: 0}, action = {}) => {
  switch (action.type) {
    case ADD:
      return {number: state.number + 1};
    default:
      return state;
  }
}
let store = createStore(reducer);
function render() {
  document.querySelector('#root').innerHTML = `
<p id="number">${store.getState().number}</p>
<button id="addBtn">+</button>
`;
  document.querySelector('#addBtn').addEventListener('click', function () {
    store.dispatch({type: ADD});
  })
}
render();
store.subscribe(render);



