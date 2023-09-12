import React, { Component } from 'react'
import '../01-base/css/02-card.css'
import Film from './ticketscomponent2/Film'
import Cinema from './ticketscomponent2/Cinema'
import Center from './ticketscomponent2/Center'
import Tabbar from './ticketscomponent2/Tabbar'
import Navbar from './ticketscomponent2/Navbar'


export default class App extends Component {
    state ={
        list:[
            {
            id:1,
            text:"电影"
        },
        {
            id:2,
            text:"影院"
        },
        {
            id:3,
            text:"我的"
        }
    ],
    current:0
    }
  render() {
    return (
      <div>
        {/* { this.state.current===0&&<Film></Film>}
        { this.state.current===1&& <Cinema></Cinema>}
        { this.state.current===2&&<Center></Center>} */}
        <Navbar myevent={()=>{
            this.setState({
                current:2
            })
        }}/>
        {this.which()}
       
        <Tabbar event={(index)=>{
            this.setState({
                current:index
            })
        }} current={this.state.current} list={this.state.list}/>
      </div>
    )
  }


  which(){
    switch(this.state.current){
        case 0:
            return <Film></Film>
        case 1:
            return <Cinema></Cinema>
        case 2:
                return <Center></Center>
        default:
                return null
    }
    

  }
}
