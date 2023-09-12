// import React, { Component } from 'react'

// export default class Tabbar extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//             {
//                 this.props.list.map((item,index)=>
//                 <li key={item.id} 
//                 className={this.props.current===index?'active':''} 
//                 onClick={()=>this.handleClick(index)}>{item.text}</li>)
//             }
//         </ul>
//       </div>
//     )
//   }

//   handleClick(index){
//     console.log(index)
//     // this.setState({current:index})
//     this.props.event(index)
//   }
// }


//函数式写法
import React from 'react'

export default function Tabbar(props) {

  // function handleClick(index){
  //   console.log(index)
  //   // this.setState({current:index})
  //   this.props.event(index)
  // }

  return (
    <div>
        <ul>
            {
                props.list.map((item,index)=>
                <li key={item.id} 
                className={props.current===index?'active':''} 
                onClick={()=>props.event(index)}>{item.text}</li>)
            }
        </ul>
      </div>
  )
}
