import React, { Component } from 'react'

export default class App extends Component {
    // state = {
    //     text:"收藏",
    //     isShow:true
    // }
    constructor(){
        super()
        this.state = {
            text:"收藏",
            isShow:true,
            Author:"ZHF"
        }
    }
  render() {
    // var text ="收藏"
    return (
      <div>
        <h1>欢迎来到react开发-{this.state.Author}</h1>
        <button onClick={()=>{this.setState(
            {isShow:!this.state.isShow,
                Author:"lym"
            }
            )}}>{this.state.isShow?"收藏":"取消收藏"}</button>
      </div>
    )
  }
}
