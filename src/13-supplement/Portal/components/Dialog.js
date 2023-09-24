import React, { Component } from 'react'
import {createPortal} from 'react-dom'

export default class Dialog extends Component {
  render() {
    //可以让子组件生成在根组件外,可做弹窗
    return createPortal(
        <div style={{width:'100%',height:'100%',position:"fixed",left:0,background:"rgb(0,0,0,0.7)",color:'white'}}>
            Dialog

        </div>,document.body
    )
  }
}
