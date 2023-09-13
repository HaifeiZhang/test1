import React, { Component } from 'react'

export default class App extends Component {
    state ={
        myname:"zhangsan"
    }
  render() {
    console.log("render")
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                myname:"Lisi"
            })
        }}>Click</button>
        <div>{this.state.myname}</div>
      </div>
    )
  }

  //性能优化函数，点击事件如果没有改变任何状态不再调用render函数渲染，
  shouldComponentUpdate(nextProps, nextState) { 
    // if(this.state.myname!=nextState.myname){
    //     return true;
    // }
    if (JSON.stringify(this.state)!== JSON.stringify(nextState)) {
        return true;
    }
    return false;
   }
}
