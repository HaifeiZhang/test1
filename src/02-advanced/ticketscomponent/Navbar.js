import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{background:"yellow", textAlign:"center",overflow:"hidden"}}>
        <button style={{float:"left"}}>back</button>
        <span>Tickets</span>
        <button style={{float:"right"}} onClick={()=>{
          this.props.myevent()
        }}>Center</button>
      </div>
    )
  }
}
