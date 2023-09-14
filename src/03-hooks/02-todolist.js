import React, { useState } from 'react'


//useState 让整个函数执行一遍
//setState 只是Class重新执行render()渲染
export default function App() {
    const[text,setText] = useState("")
    const[list,setList] = useState(["aaa","bbb","ccc"])
  return (
    <div>
        <input onChange={(event)=>{
            setText(event.target.value)
        }} value={text}/>
        <button onClick={()=>{
            setList([...list,text])
            setText("")
        }}>Add</button>
        <div>
            <ul>
                {list.map((item,index)=><li key={item}>
                    {item}
                    <button onClick={()=>{
                        var newList = [...list]
                        newList.splice(index,1)
                        setList(newList)
                    }}>del</button>
                </li>)}
            </ul>
        </div>
        {!list.length&&<div>暂无代办事项</div>}
    </div>
  )
}
