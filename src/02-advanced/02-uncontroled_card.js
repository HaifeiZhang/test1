import React, { Component } from 'react'
import '../01-base/css/02-card.css'
import Film from './ticketscomponent/Film'
import Cinema from './ticketscomponent/Cinema'
import Center from './ticketscomponent/Center'
import Tabbar from './ticketscomponent/Tabbar'
import Navbar from './ticketscomponent/Navbar'


export default class App extends Component {
    state ={
    current:0
    }
  render() {
    return (
      <div>
        {/* { this.state.current===0&&<Film></Film>}
        { this.state.current===1&& <Cinema></Cinema>}
        { this.state.current===2&&<Center></Center>} */}
        <Navbar/>
        {this.which()}
       
        <Tabbar event={(index)=>{
            this.setState({
                current:index
            })
        }}/>
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
