import React from 'react';

//connect是为了连接的仓库里的状态村和组件的属性对象
//为了减少重复代码
//输入 就是把redux状态数中的属性映射或者说输入到组件中显示
//输出 把当前组件中的操作输出出去，从而修改状态树
// mapStateToProps 把redux的状态树映射为自己的状态对象，然后作为属性传递给_component
let connect = (mapStateToProps,mapDispatchToProps) => (_component) => {
  class Proxy extends React.Component {
    static contextTypes = {
      store:React.PropTypes.object
    }
    constructor() {
      super();
      //store.getState() {counter:{number:0},todos:{list:[]}}
      //把状态树映射为当前Proxy组件的state，也就是_component的属性
      this.state = mapStateToProps(this.context.store.getState());
      //this.state = {number:0}; state.counter
    }
//真正的connect方法是从上下文对象获取的store
    componentWillMount() {
      this.unSubscribe = this.context.store.subscribe(() => {
        this.setState(mapStateToProps(this.context.store.getState()));
      })
    }

    componentWillUnmount() {
      this.unSubscribe();
    }

    //{...this.state} 就是把this.state的属性全部展开传给_component
    render() {
      return <_component
        {...mapDispatchToProps(this.context.store.dispatch)}
        {...this.state}/>
    }
  }
  return Proxy;
}

export {connect};