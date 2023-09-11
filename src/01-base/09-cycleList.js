import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list:["1111","2222","3333"]
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item=><li>{item}</li>)}
        </ul>
      </div>
    )
  }
}
