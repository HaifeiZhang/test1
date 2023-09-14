import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function App() {
    const[list,setList] = useState([])

    //会导致进入死循环
    // axios.get("url").then(res=>{
    //     setList([])
    // })

    //用useEffect这样就执行一次
    useEffect(()=>{
        axios.get("url").then(res=>{
        setList([])
        })
    },[])
  return (
    <div>App</div>
  )
}
