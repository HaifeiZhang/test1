import React, { Component } from 'react'
import {List} from 'immutable'

//List不会对原数组进行任何更改
var arr = List([1,2,3])

var arr1 = arr.push(5)

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
