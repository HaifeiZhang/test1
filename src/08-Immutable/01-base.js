import React, { Component } from 'react'

var obj = {
    name:"zhnasan",
    arr:[1,2,3],
    adress:undefined
}

//引用复制，浅复制，改变obj1得值会影响obj得值
var obj1 = obj

//多一层复制，只能深复制到name层级，不能arr层级
var obj2 ={...obj}

//解析与反解析，深复制，但是不会复制undefined变量
var obj3 = JSON.parse(JSON.stringify(obj))

//deepcopy,递归复制，深复制，但是影响性能

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
