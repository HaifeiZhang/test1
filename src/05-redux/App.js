import React, { Component } from 'react'
import Myrouter from './routers/myrouter'
import Tabbar from './components/Tabbar'
import './views/App.css'
import store from './redux/store'

export default class App extends Component {

  
  state={
    isShow:store.getState().TabbarReducer.show
  }

  componentDidMount() { 
    store.subscribe(()=>{
      console.log("subscribe",store.getState())
      this.setState({
        isShow:store.getState().TabbarReducer.show
      })
    })
   }

  render() {
    return (
      <div>
        {/* 其他信息 */}
        <Myrouter>
          {this.state.isShow&&<Tabbar/>}
        </Myrouter>

      </div>
    )
  }
}
