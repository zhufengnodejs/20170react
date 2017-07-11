import * as actionTypes from './action-types';
let initState = {words:[],hint:''};
export default function(state=initState,action){
  switch(action.type){
    case actionTypes.SEARCH:
      console.log('开始搜索');
      return {...state,hint:'搜索中......'}
    case actionTypes.SEARCH_SUCCESS:
      return {words:[...state.words,...action.words],hint:''}
    default:
      return state;
  }
}