import React, { Component, useEffect } from 'react'

function Child(){

    useEffect(()=>{
        window.onresize=()=>{
            console.log("onsize")
        }
        var timer1= setInterval(() => {
            console.log("time1")
        }, 1000);

        //最后执行一个回调函数
        //可以销毁timer
        return ()=>{
            window.onresize=null
            clearInterval(timer1)
        }
    },[])  

    return (<div>Child</div>)
}


// class Child extends Component{
//     render(){
//         return(
//             <div>1111</div>
//         )
//     }

//         //组件被销毁时，里面的事件或者timer不会被销毁
//     componentDidMount(){
//         window.onresize=()=>{
//             console.log("onsize")
//         }
//         this.timer1= setInterval(() => {
//             console.log("time1")
//         }, 1000);
//       }
//       //用componentWillUnmount销毁所有事件
//       componentWillUnmount(){
//         window.onresize=null
//         clearInterval(this.timer1)
//       }
// }

export default class App extends Component {
    state={
        isCreated:true
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                isCreated:false
            })
        }}>Click</button>
        {this.state.isCreated&&<Child/>}
        
      </div>
    )
  }
}
