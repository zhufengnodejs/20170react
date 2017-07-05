import React from 'react';
import store from './store';
let connect = (mapStateToProps,mapDispatchToProps) => (_component) => {
  class Proxy extends React.Component {
    constructor() {
      super();
      //把状态树映射为当前Proxy组件的state，也就是_component的属性
      this.state = mapStateToProps(store.getState());
    }

    componentWillMount() {
      this.unSubscribe = store.subscribe(() => {
        this.setState(mapStateToProps(store.getState()));
      })
    }

    componentWillUnmount() {
      this.unSubscribe();
    }

    //{...this.state} 就是把this.state的属性全部展开传给_component
    render() {
      return <_component
        {...mapDispatchToProps(store.dispatch)}
        {...this.state}/>
    }
  }
  return Proxy;
}

export default connect;