import React, { Component, Suspense } from 'react'
//此种加载为直接加载，一次加载所有
// import Comingsoon from './comingsoon'
// import Nowplaying from './nowplaying'


//此处为lazy加载，需要显示的时候才会分别加载
const Comingsoon = React.lazy(()=>import('./comingsoon'))
const Nowplaying = React.lazy(()=>import('./nowplaying'))
export default class App extends Component {
    state={
        type:1
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                type:1
            })
        }}>now</button>
        <button onClick={()=>{
            this.setState({
                type:0
            })
        }}>soon</button>
        <Suspense fallback={<div>loading....</div>}>
        {
            this.state.type===1?<Nowplaying/>:<Comingsoon/>
        }
        </Suspense>

      </div>
    )
  }
}
