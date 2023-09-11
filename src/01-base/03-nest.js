import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return <div>Navbar
            <Child></Child>
        </div>
    }
}

function Swiper(){
    return <div>Swiper</div>
}

const Tabbar = ()=><div>Tabbar</div>
const Child = ()=><div>Child</div>


export default class App extends Component {
  render() {
    return (
        <div>
            <Navbar></Navbar>
            <Swiper></Swiper>
            <Tabbar></Tabbar>
        </div>

    )
  }
}

