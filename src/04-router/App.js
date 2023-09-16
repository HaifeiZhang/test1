import React, { Component } from 'react'
import Myrouter from './routers/myrouter'
import Tabbar from './components/Tabbar'
import './views/App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 其他信息 */}
        <Myrouter>
          <Tabbar/>
        </Myrouter>

      </div>
    )
  }
}
