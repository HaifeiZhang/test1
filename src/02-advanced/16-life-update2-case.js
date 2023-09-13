import React, { Component } from 'react'

class Box extends Component{
    render(){
      console.log("render2")
        return(
            <div style={{height:"100px",width:"100px",
            border:this.props.curent===this.props.index?"5px solid red":"1px solid gray",float:"left",margin:"10px"}}></div>
        )
    }
    shouldComponentUpdate(nextProps, nextState) { 
      if((nextProps.curent===nextProps.index)||(this.props.curent===this.props.index)){
        return true
      }
      return false
     }
}

export default class App extends Component {
    state ={
        list:["01","02","03","04","05","06","07","08","09"],
        curent:0
    }
  render() {
    console.log("render1")
    return (
      <div>
        <input type="number" onChange={(event)=>{
            this.setState({
                curent:Number(event.target.value)
            })
        }}/>
        <div style={{overflow:"hidden"}}>
        {this.state.list.map((item,index)=><Box key={item} 
        curent={this.state.curent} index={index}></Box>)}
        </div>
        
      </div>
    )
  }
}
