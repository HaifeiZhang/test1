import React, { useCallback, useState } from 'react'

export default function App() {
    const [name,setName] = useState("")

    const [age,setAge] = useState(0)

    //缓存作用，防止不相关的状态改变时，重新再创建该函数，只有跟相关状态改变时才创建函数
    //用来提高性能，与useMemo也是用来提高性能
    const handle1 = useCallback(()=>{
        setName("ZhangSan")
        console.log("setName")
    },[name])
    const handle2 = useCallback(()=>{
        setAge(18)
        console.log("setAge")
    },[age])
  return (
    <div>
    <button onClick={()=>handle1()}>ClickName</button>
    <button onClick={()=>handle2()}>ClickName</button>
    <div>App-{name}-{age}</div>
    </div>
  )
}
