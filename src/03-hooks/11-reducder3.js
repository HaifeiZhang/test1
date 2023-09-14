import React, { useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import './css/index.css'

const GloableContext = React.createContext()

const reducer = (prestate,action)=>{
  console.log(prestate)
  let newstate ={...prestate}
  switch(action.type)
  {
      case "dataIni":
          newstate.addr=action.value[0].address
          newstate.cinemalist=action.value
          return newstate
      case "dataswitch":
          newstate.addr=action.value
          return newstate
      default:
          return prestate
  }
}

const initialstate = {
  addr:"",
  cinemalist:[]
}


//用useContext解决跨级通讯问题，
//与class 的const GloableContext = React.createContext()一样
export default function App() {

  var [state,dispatch] = useReducer(reducer,initialstate)
  useEffect(()=>{
    axios.get('/test.json').then(res=>{
      console.log(res.data.data);
      //setCinemalist(res.data.data)
      dispatch({
        type:"dataIni",
        value:res.data.data
      });
  });
  },[])//这儿必须这样写不然进入死循环

  return (
    <GloableContext.Provider value={{
      state,
      dispatch
    }}>
        <div>
            {state.cinemalist.map(item=><CinemaItem key={item.cinemaId} {...item}></CinemaItem>)}
            <CinemaAddress/>
        </div>
  </GloableContext.Provider>
)
}


function CinemaItem (props){
  let {cinemaId,name,address} = props
  var {dispatch} = useContext(GloableContext)
  return <div onClick={()=>{
    console.log(address)
        dispatch({
          type:"dataswitch",
          value:address
        })
          }}>
        <h4>{cinemaId}</h4>
        <h5>{name}</h5>
    </div>
}

function CinemaAddress (){

  var {state} = useContext(GloableContext)
  return <div className="CinemaInfo">
        {state.addr}
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
