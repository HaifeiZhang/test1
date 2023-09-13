import React, { Component } from 'react'

export default class ZSwiperItem extends Component {
  render() {
    return (
      <div className="swiper-slide">
        {this.props.children}
      </div>
    )
  }
}
