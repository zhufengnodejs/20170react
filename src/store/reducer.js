import * as actionTypes from './action-types';
let initState = {words:[]};
export default function(state=initState,action){
  switch(action.type){
    case actionTypes.SEARCH:
      console.log('search');
      return {words:[...state.words,'1']};
    default:
      return state;
  }
}