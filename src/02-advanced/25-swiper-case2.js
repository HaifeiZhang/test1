import React, { Component } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination])

export default class App extends Component {
    state={
        list:[]
    }

    componentDidMount(){
        setTimeout=(()=>{
            this.setState({
                list:["aaa","bbb","ccc"]
            })
        },1000)
        // new Swiper(".swiper",{
        //     pagination: {
        //         el: '.swiper-pagination',
        //       }
        // })
    }
    //因为是异步获取数据所以必须是等dom结束之后在new swiper
    componentDidUpdate(){
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
                {this.state.list.map(item=><div key={item} className="swiper-slide" style={{height:"100px",background:"yellow"}}
                >{item}</div>)}
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
