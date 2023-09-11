import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
  render() {
    var name  = "aaaa:"
    var obj = {
      background:"yellow",
      fontSize:"50px"
    }
    return (
      <div>
        {10+20}-{name}
        {10>20?'aaa':'aaasss'}
        <div style={obj}>
          hhhhh
        </div>
        <div className='active'>
          hhhhh
        </div>
      </div>
    )
  }
}
