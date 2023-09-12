import React from 'react'

export default function Sidebar(props) {
    let{bg,position} = props
    var obj = {
        background:bg, 
        width:"200px", 
        position:"fixed"
        }
    var obj1 = {
        left:0
    }
    var obj2 = {
        right:0
    }

    var newObj = position==="Left"?{...obj,...obj1}:{...obj,...obj2}

  return (
    <div style={newObj}>
        <ul>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
        </ul>
    </div>
  )
}

// 属性验证
// Sidebar.propTypes = {

// }
// Sidebar.defaultProps ={

// }

