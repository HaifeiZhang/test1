import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    // myref = React.createRef();
    state={
        mytext:"",
        list:[{
            id:1,
            text:"aaa",
            isChecked:false
        },
        {
            id:2,
            text:"bbc",
            isChecked:true
        },
        {
            id:3,
            text:"ccc",
            isChecked:false
        }
    ]
    }
  render() {
    return (
      <div>
        <input value={this.state.mytext} onChange={(event)=>{
            this.setState({
                mytext:event.target.value
            })
        }}></input>
        <button onClick={this.handleClick}>Add</button>
        <ul>
            {
                this.state.list.map((item,index)=>
                <li key={item.id}>
                    <input type="checkbox" checked={item.isChecked} onChange={()=>{
                        this.handleCheck(index)
                    }} />
                    {/* {item.text} */}

                    {/* 富文本类型，谨慎使用 */}
                    <span dangerouslySetInnerHTML={{
                        __html:item.text }
                    } style={{textDecoration:item.isChecked?"line-through":""}}></span>

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
  handleCheck=(index)=>{
    console.log(index)
    let newList = [...this.state.list]
    newList[index].isChecked = !newList[index].isChecked
    this.setState({
        list:newList
    })
    console.log(newList)
  }


  handleClick=()=>{
    console.log("Click")
    // this.state.list.push(this.myref.current.value)
    let newList = [...this.state.list]
    newList.push({
        id:this.state.list.length+1,
        text:this.state.mytext,
        isChecked:false
    })
    this.setState({
        list:newList,
        mytext:""
    })

    // this.myref.current.value = ""
}
  handleDelClick =(index)=>{
    console.log("del-Click",index)
    let newList = this.state.list.concat();
    newList.splice(index,1)
    this.setState({list:newList})
  }
  
}
