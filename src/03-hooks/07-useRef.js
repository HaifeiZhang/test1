import React, { useRef, useState } from 'react'

// export default function App() {
//     //此处用法与React.createRef()一样
//     var myref = useRef(null)
//   return (
//     <div>
//         <input ref={myref}></input>
//         <button onClick={()=>{
//             console.log(myref.current.value)
//         }}> Click</button>
//     </div>
//   )
// }


export default function App() {
    //此处用法与React.createRef()一样
    //只是为了让其重新渲染
    const[a,seta] = useState(0)
    //此处用法是为了缓存变量
    var myref = useRef(0)
    var count = 0
  return (
    <div>
        {/* <input ref={myref}></input> */}
        <button onClick={()=>{
          myref.current++
          count++
          seta(myref.current)
        }}> Count</button>
        {myref.current}-{count}
        
    </div>
  )
}
