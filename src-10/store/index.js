//从redux中引入createStore属性，它是一个函数
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer';
let local = store => next => action =>{
   if(action.keyword ){
     localStorage.setItem('keyword',action.keyword);
   }
   next(action);
}
//创建一个store
let store = applyMiddleware(local,thunk,logger)(createStore)(reducer);
//let store = createStore(reducer);
//默认导出store
export default store;