import React from 'react'
import store from '../redux/store'

export default function City(props) {
    const citys = ["Beijing","ShangHai","DongGuagng","DaLiaN"]
  return (
    <div>City
        <ul>
            {citys.map(item=><li key={item} onClick={()=>{
                store.dispatch({
                    type:"Change-City",
                    CityName:item
                })
                props.history.push(`/cinemas`)
            }}>{item}</li>)}
        </ul>
    </div>
  )
}
