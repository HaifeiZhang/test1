import React, { Component } from 'react'

export default class App extends Component {
  myref =React.createRef()
  render() {
    return (
      <div>
        <input ref="mytext"></input>
        <input ref={this.myref}></input>
        <button onClick={()=>{
          // console.log("Click",this.refs.mytext.value)
          console.log("Click",this.myref.current.value)
        }}> Add</button>
      </div>
    )
  }

}
