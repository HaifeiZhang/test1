import axios from 'axios'
import React, { Component } from 'react'
import './css/03-CinemaInfo.css'

const GloableContext = React.createContext()

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
        <GloableContext.Provider value={{
            address:this.state.address,
            changeAddress:(value)=>{
                this.setState({
                    address:value
                })
            }
        }}>
            <div>
                {this.state.cinemalist.map(item=><CinemaItem key={item.cinemaId} {...item}></CinemaItem>)}
                <CinemaAddress/>
            </div>
      </GloableContext.Provider>
    )
  }
}

class CinemaItem extends Component{

    render(){
        let {cinemaId,name,address} = this.props
        return(
            <GloableContext.Consumer>
                {
                    (value)=>{
                        return <div onClick={()=>{
                            value.changeAddress(address)
                        }}>
                            <h4>{cinemaId}</h4>
                            <h5>{name}</h5>
                        </div>
                    }
                }
            
            </GloableContext.Consumer>
        )
    }
}

class CinemaAddress extends Component{
    render(){
        return(
            <GloableContext.Consumer>
                {
                    (value)=>{return <div className="CinemaInfo">
                    {value.address}
                </div>}
                }
            </GloableContext.Consumer>
            
        )
    }
}
