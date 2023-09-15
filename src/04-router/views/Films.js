import React from 'react'
import { Route, Switch,Redirect, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import NowPlaying from './Films/NowPlaying'
import ComingSoon from './Films/ComingSoon'

export default function Films() {
  return (
    <div>
      <div style={{background:"yellow",height:"100px"}}>Films</div>
      <div>
        <ul>
          <li>
            <NavLink to="/films/nowplaying">正在上映</NavLink>
          </li>
          <li>
            <NavLink to="/films/comingsoon">即将上映</NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/films/nowplaying" component={NowPlaying}></Route>
        <Route path="/films/comingsoon" component={ComingSoon}></Route>
        <Redirect from="/films" to="/films/nowplaying" exact></Redirect>
      </Switch>
    </div>
  )
}
