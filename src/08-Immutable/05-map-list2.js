import React, { Component } from 'react'
import {fromJS} from 'immutable'

//可以通过setIn去修改，this.state.setIn(["location","city"],"hebei")
//可以通过updateIn去修改，this.state.updateIn(["favor"],(list)=>{list.splice(index,1)})
//fromJS,toJS还原

export default class App extends Component {
    state={
        info:fromJS({
            name:"zhangsan",
            location:{
                province:"beijing",
                city:"beijing"
            },
            favor:["basketball","federball","swim"]
        })
    }
  render() {
    return (
      <div>App</div>
    )
  }
}
