import React, { Component } from 'react'
import Navbar from './Navbar'


export default class App extends Component {
  render() {
    var obj ={
        title:"测试",
        leftshow:true
    }
    return (
      <div>
        <div>
            <h2>首页</h2>
            <Navbar title ="首页" leftshow={false}></Navbar>
        </div>
        <div>
            <h2>列表</h2>
            <Navbar title="列表" ></Navbar>
        </div>
        <div>
            <h2>购物车</h2>
            <Navbar title="购物车"></Navbar>
        </div>
        {/* 下面两种传值方法一样 */}
        <div>
            <h2>购物车</h2>
            <Navbar {...obj}></Navbar>
        </div>
        <div>
            <h2>购物车</h2>
            <Navbar title={obj.title} leftshow={obj.leftshow}></Navbar>
        </div>
      </div>
    )
  }
}
