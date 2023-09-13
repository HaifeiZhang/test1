import React, { Component } from 'react'


class Child extends Component{
    state={
        title:""
    }
    render(){
        return(
            <div>
                {this.state.title}
            </div>
        )
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.text)
        this.setState({
            title:nextProps.text
        })
    }
}

export default class App extends Component {
    state={
        text:"11111"
    }
  render() {
    return (
      <div>
        <Child text={this.state.text}></Child>
        <button onClick={()=>{
            this.setState({
                text:"22222"
            })
        }}>Click</button>
      </div>
      
    )
  }
}
