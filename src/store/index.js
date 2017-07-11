//从redux中引入createStore属性，它是一个函数
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer';
//创建一个store
let store = applyMiddleware(thunk,logger)(createStore)(reducer);
//let store = createStore(reducer);
//默认导出store
export default store;