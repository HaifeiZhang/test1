import React, { Component } from 'react'
import ZSwiper from './Swiper/ZSwiper'
import ZSwiperItem from './Swiper/ZSwiperItem'

export default class App extends Component {
  state={
    list:[]
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        list:["aaaa","bbbb","cccccc"]
      })
    }, 100);
  }

  render() {
    return (
      <div>
        <ZSwiper>
            {this.state.list.map(item=><ZSwiperItem key={item}>
              <div style={{height:"100px",background:"yellow"}}>{item}</div>
            </ZSwiperItem>)}
        </ZSwiper>
      </div>
    )
  }
}
