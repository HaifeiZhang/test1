import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>07-subscribe-publish</div>
    )
  }
}

var bus ={
    list:[],
    subscribe(callback){
        this.list.push(callback)
    },

    publish(value){
        this.list.forEach(
            callback=>{
                callback&&callback(value)
            }
        )
    }
}

bus.subscribe((value)=>{
    console.log("Subscribe1",value)
})

bus.subscribe((value)=>{
    console.log("Subscribe2",value)
})

bus.subscribe((value)=>{
    console.log("Subscribe3",value)
})


setTimeout(() => {
    bus.publish("11111")
}, 0);