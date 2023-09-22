import React, { Component } from 'react'
import {Map} from 'immutable'


//MAP进行深复制，用set("key","value")更新数据，get("Key")获取数据

export default class App extends Component {
    state =Map({
        name:"zhansan",
        age:15,
        aaa:Map({
            a:"a",
            b:"b",
            c:"c"
        })
    })
  render() {
    return (
      <div>App</div>
    )
  }
}
