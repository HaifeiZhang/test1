import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return(
            <div style={{background:"red"}}>
                {/* <button onClick={()=>{
                    // 获取父组件的的属性，并回调
                    this.props.event()
                }}>Click</button> */}
                {this.props.children}
                navbar
            </div>
        )
        
    }
}

class Sidebar extends Component{
    render(){
        return(
                <div>
                    <ul style={{background:"yellow"}}>
                        <li>111111</li>
                        <li>111111</li>
                        <li>111111</li>
                        <li>111111</li>
                        <li>111111</li>
                        <li>111111</li>
                    </ul>
                </div>
        )
    }
}

export default class App extends Component {
    state={
        isShow: true
    }
    // 要通过属性传给子组件的回调函数
    //如果所有组件都写在一个APP组件中，就不需要
    // handleCall=()=>{
    //     this.setState({
    //         isShow:!this.state.isShow
    //     })
    //}
  render() {
    return (
      <div>
        <Navbar>
            <button onClick={()=>{
                this.setState({
                    isShow:!this.state.isShow
                })
            }}>Click</button>
        </Navbar>
        {this.state.isShow && <Sidebar/>}
      </div>
    )
  }
}

