import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './css/index.css'

const GloableContext = React.createContext()

//用useContext解决跨级通讯问题，
//与class 的const GloableContext = React.createContext()一样
export default function App() {
  const[addr,serAddr]=useState("")
  const[cinemalist,setCinemalist]=useState([])

  useEffect(()=>{
    axios.get('/test.json').then(res=>{
      console.log(res.data.data)
      setCinemalist(res.data.data)
  })
  },[])//这儿必须这样写不然进入死循环

  return (
    <GloableContext.Provider value={{
        address:addr,
        changeAddress:(value)=>{
          serAddr(value)
        }
    }}>
        <div>
            {cinemalist.map(item=><CinemaItem key={item.cinemaId} {...item}></CinemaItem>)}
            <CinemaAddress/>
        </div>
  </GloableContext.Provider>
)
}


function CinemaItem (props){
  let {cinemaId,name,address} = props
  var value = useContext(GloableContext)
  return <div onClick={()=>{
        value.changeAddress(address)
          }}>
        <h4>{cinemaId}</h4>
        <h5>{name}</h5>
    </div>
}

function CinemaAddress (){

  var value = useContext(GloableContext)
  return <div className="CinemaInfo">
        {value.address}
       </div>

}



// export default class App extends Component {
// constructor(){
//     super()
//     this.state={
//         cinemalist:[],
//         address:""
//     }

//     axios.get('/test.json').then(res=>{
//         console.log(res.data.data)
//         this.setState({
//             cinemalist:res.data.data
//         })
//     })
// }
//   render() {
//     return (
//         <GloableContext.Provider value={{
//             address:this.state.address,
//             changeAddress:(value)=>{
//                 this.setState({
//                     address:value
//                 })
//             }
//         }}>
//             <div>
//                 {this.state.cinemalist.map(item=><CinemaItem key={item.cinemaId} {...item}></CinemaItem>)}
//                 <CinemaAddress/>
//             </div>
//       </GloableContext.Provider>
//     )
//   }
// }

// class CinemaItem extends Component{

//     render(){
//         let {cinemaId,name,address} = this.props
//         return(
//             <GloableContext.Consumer>
//                 {
//                     (value)=>{
//                         return <div onClick={()=>{
//                             value.changeAddress(address)
//                         }}>
//                             <h4>{cinemaId}</h4>
//                             <h5>{name}</h5>
//                         </div>
//                     }
//                 }
            
//             </GloableContext.Consumer>
//         )
//     }
// }

// class CinemaAddress extends Component{
//     render(){
//         return(
//             <GloableContext.Consumer>
//                 {
//                     (value)=>{return <div className="CinemaInfo">
//                     {value.address}
//                 </div>}
//                 }
//             </GloableContext.Consumer>
            
//         )
//     }
// }
