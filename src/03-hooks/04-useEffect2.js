import React, { useEffect, useState } from 'react'

export default function App() {
    const[name,setName]=useState("zhansan")

    //可以使用多次
    //如果需要在useEffect中操作DOM 建议使用useLayoutEffect
    //useEffect 是在dom创建之后，渲染完成之后执行
    //useLayoutEffect 在dom创建之后，渲染之前执行，可能导致界面卡顿
    useEffect(()=>{
        var newname = name.substring(0,1).toUpperCase()+name.substring(1)
        setName(newname)
    },[name])
    //每一次name更新，都会执行一次
  return (
    <div>App-{name}
        <button onClick={()=>{
            setName("lisi")
        }}>Click</button>
    </div>
  )
}
