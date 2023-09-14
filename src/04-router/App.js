import React, { Component } from 'react'
import Myrouter from './routers/myrouter'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 其他信息 */}
        <Myrouter></Myrouter>

      </div>
    )
  }
}
