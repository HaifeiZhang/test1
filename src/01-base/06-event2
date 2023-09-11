import React, { Component } from 'react'

export default class App extends Component {
  render() {
    a = 100
    return (
      <div>
        <input></input>
        <button onClick={()=>{
          console.log("Click",this.a)
        }}> Add</button>
        <button onClick={this.handleClick.bind(this)}>Add2</button>
        <button onClick={this.handleClick3}>Add3</button>
        <button onClick={()=>{this.handleClick4()}}>Add3b 推荐传参需要</button>
      </div>
    )
  }
  handleClick(){
    console.log("Click2",this.a);
  }

  handleClick3 = ()=>{console.log("Click3",this.a)}
  handleClick4(){
    console.log("Click4",this.a);
  }

}
