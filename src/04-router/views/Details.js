import React, { Component } from 'react'

export default class Details extends Component {
    componentDidMount(){
        console.log(this.props)
    }
  render() {
    return (
      <div>Details-{this.props.match.params.cinemaId}</div>
    )
  }
}
