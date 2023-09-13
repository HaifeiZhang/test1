import React, { Component } from 'react'

export default class App extends Component {
    state={
        myname:"zhhangsan"
    }
    //适用于初始化以及后续更新都需要执行的共同逻辑
    static getDerivedStateFromProps(nextProps,nextState){
        return{
            myname:nextState.myname.substring(0,1).toUpperCase()+
            nextState.myname.substring(1)
        }
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                myname:"lisi"
            })
        }}>Click</button>
        {this.state.myname}
      </div>
    )
  }
}
