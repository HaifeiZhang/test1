import React, { Component } from 'react'
import store from '../redux/store'
import getCinemasList from '../actionCreator/CinamesListCreator'

export default class Cinemas extends Component {
  state = {
    CityName:store.getState().CityReducer.CityName,
    CinemasList:store.getState().CinemasReducer.CinemaList
  }

  componentDidMount() { 
    if(this.state.CinemasList.length===0){
      store.dispatch(getCinemasList())
    }
    else{

    }
    //console.log(this.state.CinemasList)
    store.subscribe(()=>{
      this.setState({
        CinemasList:store.getState().CinemasReducer.CinemaList
      })
      //console.log(this.state.CinemasList)
    })
   }

  render() {
    return (
      <div>
        <div onClick={()=>{
          this.props.history.push(`/city`)
        }}>{this.state.CityName}</div>
        <div>
          <ul>
            {this.state.CinemasList.map(item=><li key={item.cinemaId}>{item.name}</li>)}
          </ul>
        </div>
        </div>
    )
  }
}
