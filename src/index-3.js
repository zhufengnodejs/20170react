import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
/**
 * 生成一个高阶组件的函数 其实就是外层组件
 * 可以接收一个普通的组件
 **/
import connect from './connect';
class Todo extends React.Component{
  handleKeyDown = (event)=>{
    if(event.keyCode == 13){
      let title = event.target.value;
      this.props.addTodo(title);
      // dispatch({type:'ADD_TODO',title:val});
    }
  }
  render(){
    // state.todos = {list:['a']}
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown}/>
        <ul>
          {
            this.props.list.map((item,index)=>(
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
let mapStateToProps = state=>state.todos;//{list:[]}
let mapDispatchToProps = dispatch =>({
  addTodo:(title)=>dispatch({type:'ADD_TODO',title})
})
let NewTodo = connect(mapStateToProps,mapDispatchToProps)(Todo);
ReactDOM.render(<NewTodo/>,document.querySelector('#root'));