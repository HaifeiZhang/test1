import React, { Component } from 'react'
import {observable, autorun} from "mobx"
import store from './store'
import {inject, observer} from "mobx-react"
//@inject("store")
//@observer

//函数式写法的时候使用<Obeserver>组件实现自动监听与取消

//用mobx-react实现对事件的自动监听


var num =observable.box(10)
var str = observable.box("zhangsan")

//对num,str变量的自动独立监听，相互之间不受影响
autorun(()=>{
    console.log(num.get())
})
autorun(()=>{
    console.log(str.get())
})

setTimeout(()=>{
    num.set(20)
},1000)

setTimeout(()=>{
    str.set("Lisi")
},1000)

//对象里的属性的监听，相互独立
//map可以省略
var obj = observable.map({
    name:"zhangsan",
    age:10
})

var obj1 = observable({
    name:"zhangsan",
    age:10
})

//只是监听对象obj的name属性的变化，age变化时，不会受影响
//当autorun在组件中的时候，组件销毁时，autorun不会自动取消订阅，所以需要取消订阅，不然订阅监听会累加
autorun(()=>{
    console.log(obj.get("name"))
})
//无map
autorun(()=>{
    console.log(obj1.name)
})
setTimeout(()=>{
    obj.set("name","Lisi")
},1000)
//无map
setTimeout(()=>{
    obj1.name="Lisi"
},1000)

@inject("store")
@observer
export default class App extends Component {
    state = {
        
    }
  render() {
    return (
      <div>App
        {store.str}-{store.num}
        <button onClick={()=>{
            store.changeNum()
            this.setState()
            console.log(store.num)
        }}>Click</button>
      </div>
    )
  }
}
