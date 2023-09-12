import axios from 'axios'
import React, { Component } from 'react'
import './css/03-CinemaInfo.css'

export default class App extends Component {
constructor(){
    super()
    this.state={
        cinemalist:[],
        address:""
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
        {this.state.cinemalist.map(item=><CinemaItem key={item.cinemaId} {...item} onCallback={(value)=>{
            this.setState({
                address:value
            })
        }}></CinemaItem>)}
        
        <CinemaAddress address={this.state.address}/>
      </div>
    )
  }
}

class CinemaItem extends Component{

    render(){
        let {cinemaId,name,address} = this.props
        return(
            <div onClick={()=>{
                this.props.onCallback(address)
            }}>
                <h4>{cinemaId}</h4>
                <h5>{name}</h5>
            </div>
        )
    }
}

class CinemaAddress extends Component{
    render(){
        return(
            <div className="CinemaInfo">
                {this.props.address}
            </div>
        )
    }
}
