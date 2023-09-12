import React, { Component } from 'react'
class Field extends Component{
    state={
        value:""
    }
    clearData(){
        this.setState({
            value:""
        })
    }
  render(){
    return(
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={(event)=>
        this.setState({value:event.target.value})} value={this.state.value}></input>
      </div>
    )
  }
}

export default class App extends Component {
    username = React.createRef()
    password =React.createRef()
  
  render() {
    return (
      <div>
        <h1>登陆页面</h1>
        <Field label="用户名" type="text" ref={this.username} />
        <Field label="密码" type="password" ref={this.password}/>
        <button onClick={()=>{
        console.log(this.username.current.state.value, this.password.current.state.value)
        }}>登陆</button>
        <button onClick={()=>{
            this.username.current.clearData()
            this.password.current.clearData()
        }}>取消</button>
      </div>
    )
  }
}
