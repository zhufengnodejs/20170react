import * as actionTypes from './action-types';
let initState = {words:[],hint:''};
export default function(state=initState,action){
  switch(action.type){
    case actionTypes.SEARCH:
      return {...state,hint:'搜索中......'}
    case actionTypes.SEARCH_SUCCESS:
      return {words:action.words,hint:''}
    default:
      return state;
  }
}