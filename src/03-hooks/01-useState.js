import React, { useState } from 'react'

export default function App() {
   const[name,setName] =  useState("zhangsan")
   const[age,setAge] =  useState(15)
  return (
    <div>
        <button onClick={()=>{
            setName("Lisi")
            setAge(17)
        }}>Click</button>
        <div>
            {name}-{age}
        </div>
    </div>
  )
}
