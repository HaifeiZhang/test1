import axios from 'axios'
import React, { Component } from 'react'

export default class ComingSoon extends Component {
  componentDidMount() { 
    axios.get("/ajax/mostExpected?limit=10&offset=0&token=&optimus_uuid=EF9E5EC0540411EEB8B9A179F284B42EB38B161C98B64F778BC1E7E1C559191A&optimus_risk_level=71&optimus_code=10").then
    (res=>{
      console.log(res.data)
    }).catch(error=>{
      console.log(error)
    })
   }
  render() {
    return (
      <div>ComingSoon</div>
    )
  }
}
