import React, { Component } from 'react'

export default class App extends Component {
    state ={
        count:0
    }
  render() {
    return (
      <div>
        {
            this.state.count
        }
        <button onClick={this.handleClick}>add1</button>
        <button onClick={this.handleClick2}>add2</button>
      </div>
    )
  }

  handleClick=()=>{
    this.setState({
        count:this.state.count+1
    })
    console.log(this.state.count)
    this.setState({
        count:this.state.count+1
    })
    console.log(this.state.count)
    this.setState({
        count:this.state.count+1
    })
    console.log(this.state.count)
    // setState异步更新
  }

  handleClick2=()=>{
    setTimeout(()=>{
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)
        // setState异步更新
    },0)
    
  }
}
