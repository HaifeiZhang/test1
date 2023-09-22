import React, { Component } from 'react'
import {Map,List} from 'immutable'

//可以通过层级去修改，this.state.get("location").get("city")

export default class App extends Component {
    state={
        info:Map({
            name:"zhangsan",
            location:Map({
                province:"beijing",
                city:"beijing"
            }),
            favor:List(["basketball","federball","swim"])
        })
    }
  render() {
    return (
      <div>App</div>
    )
  }
}
