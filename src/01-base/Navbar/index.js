import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {

    //类属性校验
     static propTypes = {
        title:PropTypes.string,
        leftshow:PropTypes.bool
    }

    //默认属性
    static defaultProps={
        leftshow:true
    }


    

  render() {
    //this.props接受属性
  
    let {title,leftshow} = this.props
    return ( 
        <div>
            {leftshow&&<button>返回</button>}
            navbar-{title}
            <button>首页</button>
        </div>
      
    )
  }
}
  //要验证属性
// Navbar.prototype = {
//     title:PropTypes.string,
//     leftshow:PropTypes.bool
// }

// Navbar.defaultProps={
//     leftshow:true
// }
