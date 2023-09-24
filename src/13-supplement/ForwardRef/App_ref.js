import React, { Component } from 'react'

export default class App extends Component {
    text = null
  render() {
    return (
      <div>App
        <button onClick={()=>{
            console.log(this.text)
        }}>click</button>
        <Child callbak={(el)=>{
            this.text=el
        }}/>
      </div>
    )
  }
}


class Child extends Component{
    myref =React.createRef()
    componentDidMount() { 
        this.props.callbak(this.myref)
     }
    render() {
        return (
          <div>
            <input ref={this.myref}/>
          </div>
        )
      }
}
