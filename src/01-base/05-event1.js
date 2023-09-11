import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <input></input>
        <button onClick={()=>{
          console.log("Click")
        }}> Add</button>
        <button onClick={this.handleClick}>Add2</button>
        <button onClick={this.handleClick3}>Add3</button>
        <button onClick={()=>{this.handleClick4()}}>Add3</button>
      </div>
    )
  }
  handleClick(){
    console.log("Click2");
  }

  handleClick3 = ()=>{console.log("Click3")}
  handleClick4(){
    console.log("Click4");
  }

}
