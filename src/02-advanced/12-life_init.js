import React, { Component } from 'react'

export default class App extends Component {
    state={
        life:123
    }
    //新版react不推荐使用
    componentWillUnmount(){
        //render渲染前的最后一次，状态更改
        this.setState({
            life:234
        })

        //可以用于初始化数据的加载
    }

    componentDidMount(){
        //render渲染完成之后，完成真实DOm之后，修改DOM
        //数据获取，访问 axios
        //订阅函数调用
        //setnterval
        //基于创建完成的DOm初始化。。。。BetterScroll
    }

  render() {
    return (
      <div>App</div>
    )
  }
}
