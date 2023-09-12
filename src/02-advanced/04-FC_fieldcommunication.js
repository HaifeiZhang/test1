import React, { Component } from 'react'
class Field extends Component{
  render(){
    return(
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={(event)=>
        this.props.onChanged(event.target.value)} value={this.props.value}></input>
      </div>
    )
  }
}

export default class App extends Component {
  state={
    username:localStorage.getItem("username"),
    password:localStorage.getItem("password")
  }
  render() {
    return (
      <div>
        <h1>登陆页面</h1>
        <Field label="用户名" type="text" value={this.state.username} onChanged={(value)=>{
          this.setState({
            username:value
          })
        }}/>
        <Field label="密码" type="password" value={this.state.password} onChanged={(value)=>{
          this.setState({
            password:value
          })
        }}/>
        <button onClick={()=>{
        console.log(this.state.username, this.state.password)
        localStorage.setItem("username",this.state.username)
        localStorage.setItem("password",this.state.password)
        }}>登陆</button>
        <button onClick={()=>
        this.setState({
          username:"",
          password:""
        })}>取消</button>
      </div>
    )
  }
}
