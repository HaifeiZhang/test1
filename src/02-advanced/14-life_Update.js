import React, { Component } from 'react'
import BScroll from 'better-scroll'
import axios from 'axios'

export default class App extends Component {
    state={
        list:[]
    }
    componentDidMount(){
        //new BScroll("#wrapper")
        axios.get('./test.json').then(res=>{
            this.setState({
                list:res.data.data
            })
            console.log(res.data.data)
        })

        
    }
  render() {
    return (
        <div>
            <div id="wrapper" style={{background:"yellow",height:"200px",width:"200px",overflow:"hidden"}}>
                <ul>
                {
                    this.state.list.map(item=><li key={item.cinemaId}>{item.name}</li>)
                }
                </ul>
        
            </div>
        </div>
      
    )
  }

  componentDidUpdate(prevProps,prevSstate){
    if(prevSstate.list.length===0)
    {
        //在list为空的时候创建一次
        new BScroll("#wrapper")
    }
    
  }
}
