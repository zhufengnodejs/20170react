import $ from 'jquery';
import * as actionTypes from './action-types';
export default {
  search:(keyword)=>{
    return function(dispatch){
      //wd=关键字 cb=回调函数参数名
      dispatch({type:actionTypes.SEARCH});
      $.ajax({
        url:`http://www.baidu.com/su`,
        type:'GET',
        data:{wd:keyword},
        jsonp:'cb',//在服务器端通过哪个参数获取方法名
        dataType:'jsonp',
        success:(result)=>{
          dispatch({type:actionTypes.SEARCH_SUCCESS,words:result.s});
        }
      })
    }
  }
}