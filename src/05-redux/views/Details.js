import React, { Component } from 'react'
import store from '../redux/store'
import { hidden, show } from '../actionCreator/tabbarActionCreator'

export default class Details extends Component {

    componentDidMount(){
        console.log(this.props)
        store.dispatch(show())
    }

    componentWillUnmount(){
      store.dispatch(hidden())
    }

    
  render() {
    return (
      <div>Details-{this.props.match.params.cinemaId}</div>
    )
  }
}
