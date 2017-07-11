//从redux中引入createStore属性，它是一个函数
import {createStore} from 'redux';
import reducer from './reducer';
//创建一个store
let store = createStore(reducer);
//默认导出store
export default store;