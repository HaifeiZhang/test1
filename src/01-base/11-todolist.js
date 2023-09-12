import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    myref = React.createRef();
    state={
        list:[{
            id:1,
            text:"aaa"
        },
        {
            id:2,
            text:"bbc"
        },
        {
            id:3,
            text:"ccc"
        }
    ]
    }
  render() {
    return (
      <div>
        <input ref={this.myref}></input>
        <button onClick={this.handleClick}>Add</button>
        <ul>
            {
                this.state.list.map((item,index)=><li key={item.id}>
                    {item.text}

                    {/* <span dangerouslySetInnerHTML={{
                        __html:item.text }
                    }></span> */}

                    {/* <button onClick={this.handleDelClick.bind(this,index)}>del</button> */}
                    <button onClick={()=>this.handleDelClick(index)}>del</button>
                    </li>)
            }
        </ul>
        {/* {this.state.list.length===0?<div>暂无代办事项</div>:null} */}
        {/* {this.state.list.length===0&&<div>暂无代办事项</div>} */}
        <div className={this.state.list.length===0?'':'hidden'}>暂无代办事项</div>
      </div>
    )
    
  }
  handleClick=()=>{
    console.log("Click")
    // this.state.list.push(this.myref.current.value)
    let newList = [...this.state.list]
    newList.push({id:this.state.list.length+1,
        text:this.myref.current.value})
    this.setState({list:newList})

    this.myref.current.value = ""
}
  handleDelClick =(index)=>{
    console.log("del-Click",index)
    let newList = this.state.list.concat();
    newList.splice(index,1)
    this.setState({list:newList})
  }
  
}
