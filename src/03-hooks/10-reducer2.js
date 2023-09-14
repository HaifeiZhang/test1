import React, { useContext, useReducer } from 'react'

const GloableContext = React.createContext()
const reducer = (prestate,action)=>{
    let newstate ={...prestate}
    switch(action.type)
    {
        case "Child1":
            newstate.C1=action.value
            return newstate
        case "Child2":
            newstate.C2=action.value
            return newstate
        default:
            return prestate
    }
}

const initialstate = {
    C1:"1111",
    C2:"222222"
}



export default function App() {
    const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <GloableContext.Provider value={{
        state,
        dispatch
    }}>
        <div>
            <Child/>
            <Child1/>
            <Child2/>
        </div>
    </GloableContext.Provider>
    
  )
}

function Child(){
    var{dispatch} = useContext(GloableContext)
    return(
        <div>
            <button onClick={()=>
            dispatch({
                type:"Child1",
                value:"Child11111"
            })}>change-Child1</button>
            <button onClick={()=>
            dispatch({
                type:"Child2",
                value:"Child2222"
            })}>change-Child2</button>
        </div>
    )

}

function Child1(){
    var{state} = useContext(GloableContext)
    return(
        <div>
            Child1-{state.C1}
        </div>
    )
}

function Child2(){
    var{state} = useContext(GloableContext)
    return(
        <div>
            Child2-{state.C2}
        </div>
    )

}
