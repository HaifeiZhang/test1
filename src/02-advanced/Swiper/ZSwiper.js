import React, { Component } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination])

export default class ZSwiper extends Component {

    componentDidMount(){
        new Swiper(".swiper",{
            pagination: {
                el: '.swiper-pagination',
              }
        })
    }
  render() {
    return (
      <div>
        <div className="swiper">
            <div className="swiper-wrapper" >
               {this.props.children}
            </div>
            
            <div className="swiper-pagination"></div>
            
            
            {/* <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            
            
            <div class="swiper-scrollbar"></div>     */}
        </div>
      </div>
    )
  }
}
