import React, { useReducer } from 'react'

const reducer = (prestate,action)=>{
    let newstate ={...prestate}
    switch(action.type)
    {
        case "Minus":
            newstate.count--
            return newstate
        case "Add":
            newstate.count++
            return newstate
        default:
            return prestate
    }
}

const initialstate = {
    count:0
}

export default function App() {
    const[state,dispatch]=useReducer(reducer,initialstate)

  return (
    <div>
        <button onClick={()=>{
            dispatch({
                type:"Minus"
            })
        }}>-</button>
        {state.count}
        <button onClick={()=>{
            dispatch({
                type:"Add"
            })
        }}>+</button>
    </div>
  )
}
