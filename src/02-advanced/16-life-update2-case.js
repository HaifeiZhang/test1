import React, { Component } from 'react'

class Box extends Component{
    render(){
        return(
            <div style={{height:"100px",width:"100px",border:"1px solid gray",float:"left",margin:"10px"}}></div>
        )
    }
}

export default class App extends Component {
    state ={
        list:["01","02","03","04","05","06","07","08","09"],
        curent:0
    }
  render() {
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
