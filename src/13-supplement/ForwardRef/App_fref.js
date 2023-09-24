import React, { Component, forwardRef } from 'react'

export default class App extends Component {
    ref = React.createRef()
  render() {
    return (
      <div>App
        <button onClick={()=>{
            console.log(this.ref)
        }}>click</button>
        <Child ref={this.ref}/>
      </div>
    )
  }
}

//forwardRef 透传
const Child = forwardRef((props,ref)=>{
    return <div>
        <input ref={ref}/>
    </div>
})
