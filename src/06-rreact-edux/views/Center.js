import React from 'react'

export default function Center(props) {
  return (
    <div>
      <h1>Films</h1>
      <button onClick={()=>{
        props.history.push("/filmorder")
      }}>FilmOrder</button>
    </div>
  )
}


//withRouter 可以跨级提供history, 当Child没有props时
// const withChild = withRouter(Child)