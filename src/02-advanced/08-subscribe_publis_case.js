import axios from 'axios'
import React, { Component } from 'react'
import './css/03-CinemaInfo.css'


var bus ={
    list:[],
    subscribe(callback){
        this.list.push(callback)
    },

    publish(value){
        this.list.forEach(
            callback=>{
                callback&&callback(value)
            }
        )
    }
}

export default class App extends Component {
constructor(){
    super()
    this.state={
        cinemalist:[],
    }

    axios.get('/test.json').then(res=>{
        console.log(res.data.data)
        this.setState({
            cinemalist:res.data.data
        })
    })
}
  render() {
    return (
      <div>
        {this.state.cinemalist.map(item=><CinemaItem key={item.cinemaId} {...item} ></CinemaItem>)}
        <CinemaAddress/>
      </div>
    )
  }
}

class CinemaItem extends Component{

    render(){
        let {cinemaId,name,address} = this.props
        return(
            <div onClick={()=>{
                bus.publish(address)
            }}>
                <h4>{cinemaId}</h4>
                <h5>{name}</h5>
            </div>
        )
    }
}

class CinemaAddress extends Component{
    constructor(){
        super()
        this.state={
            address:""
        }
        bus.subscribe((info)=>{
            this.setState({
                address:info
            })
        })
    }
    render(){
        return(
            <div className="CinemaInfo">
                {this.state.address}
            </div>
        )
    }
}
