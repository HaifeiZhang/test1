import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class Cinema extends Component {
    constructor(){
        super()
        this.state={
            cinemalist:[],
            backcinemalist:[]
        }
        //axios第三方库，专门用于 请求数据
        // axios.get("https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=7435960")
        // .then(res=>{}).catch(err=>{console.log(err)});
        axios({
            url:"https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=7435960",
            method:"get",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16944592327189015044292609"}',
                'X-Host':'mall.film-ticket.cinema.list'
            }

        }).then(res=>{
            console.log(res.data.data.cinemas)
            this.setState({
                cinemalist:res.data.data.cinemas,
                backcinemalist:res.data.data.cinemas
            },()=>{
                new BetterScroll(".wrapper")
            })
            
        }).catch(err=>{console.log(err)})
    }
  render() {
    return (
      <div>
        <div className="wrapper" style={{height:'500px', background:'gray',overflow:'hidden'}}>
            <div className="content">
            <input onInput={this.handleInput}/>
            {this.state.cinemalist.map(item=>
            <dl key={item.cinemaId}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
                </dl>)}
            </div>
        </div>
        
      </div>
    )
  }
  handleInput=(event)=>{
    console.log(event.target.value)
    var newlist = this.state.backcinemalist.filter(
        item=>item.name.toUpperCase().includes(event.target.value.toUpperCase())||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
        )

        // console.log(newlist)
        this.setState({
            cinemalist:newlist
        })
  }
}
