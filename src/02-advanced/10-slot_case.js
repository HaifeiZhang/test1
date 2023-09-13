import React, { Component } from 'react'

class Child extends Component{
    render(){
        return(
            <div>
                Child
                {this.props.children[0]}
                {this.props.children[1]}
                {this.props.children[2]}
            </div>
        )
    }
}

//用途 1，复用；减少父子组件之间的通信，子组件里面的元素直接可以访问父组件的状态

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Child>
            <div>11111111</div>
            <div>22222222</div>
            <div>33333333</div>
            </Child>
      </div>
      
    )
  }
}
