import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input/>
        <button onClick={()=>{
            localStorage.setItem("token","1112223")
            this.props.history.push("/center")
        }}>login</button>
      </div>
    )
  }
}
