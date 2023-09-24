import React, { Component } from 'react'
import './02-excute_generator'
import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>{
            if(store.getState().list1.length===0){
                store.dispatch({
                    type:"get-list1"
                })
            }
            else{
                console.log("cache data:"+store.getState().list1)
            }
            console.log("data:"+store.getState().list1)
        }}>click-ajax-async-cache</button>
      </div>
    )
  }
}
