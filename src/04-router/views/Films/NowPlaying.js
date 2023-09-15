import axios from 'axios'
import React, { Component } from 'react'

export default class NowPlaying extends Component {
  state ={
    list:[]
  }
  componentDidMount(){
    axios.get("./test.json").then(res=>{
      this.setState({
        list:res.data.data
      })
    })
  }

  render() {
    return (
      <div>
        <h4>
          NowPlaying
        </h4>
        <div>
          {this.state.list.map(item=><li key={item.cinemaId} onClick={()=>this.handleDetail(item.cinemaId)}>{item.name}</li>)}
        </div>
        
      </div>
    )
  }

  handleDetail(id){
    //动态路由传参
    this.props.history.push(`/detail/${id}`)
    //<Route path="/detail/:cinemaId" component={Details}></Route>
    //<div>Details-{this.props.match.cinemaId}</div>

    //jquey方式
    //this.props.history.push({pathname:'/deatil', query:{cinemaId:id}})
    //<Route path="/detail" component={Details}></Route>
    //<div>Details-{this.props.query.cinemaId}</div>

    //state方式
    //this.props.history.push({pathname:'/deatil', state:{cinemaId:id}})
    //<Route path="/detail" component={Details}></Route>
    //<div>Details-{this.props.state.cinemaId}</div>

  }
}
