import React, { Component } from "react";
//通过文件异步实现懒加载
//import('./page').then()
const loadable = ({ loader, loading: Loading }) => {
  return class loadableComponent extends Component {
    state = {
      LoadedComponent: null
    };
    componentDidMount() {
      //loader是一个函数 执行import操作
      loader().then(res => {
        this.setState({ LoadedComponent: res.default });
      });
    }
    render() {
      const { LoadedComponent } = this.state;
      return LoadedComponent ? <loadedComponent /> : <Loading />;
    }
  };
};
export default loadable;