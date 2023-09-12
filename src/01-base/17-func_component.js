import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar tiltl="导航"></Navbar>
        <Sidebar bg="yellow" position="right"></Sidebar>
      </div>
    )
  }
}
