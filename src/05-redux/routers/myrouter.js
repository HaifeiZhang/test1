import React, { Component } from 'react'
//import { Route } from 'react-router-dom/cjs/react-router-dom'
//BrowserRouter 是没有#的路径，
import { HashRouter as Router,Route,Redirect,Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Details from '../views/Details'
import Login from '../views/Login'

function isAuth(){
  return localStorage.getItem("token")
}

export default class myrouter extends Component {
  render() {
    return (
      <div>
      <Router>
        {this.props.children}
        <Switch>
            <Route path="/films" component={Films}></Route>
            <Route path="/cinemas" component={Cinemas}></Route>
            {/* <Route path="/center" component={Center}></Route> */}
            {/* 路由拦截 */}
            <Route path="/center" render={(props)=>{return isAuth() ? <Center {...props}/>:<Redirect to="/login"/>}}></Route>
            {/* 动态路由 */}
            <Route path="/login" component={Login}/>
            <Route path="/detail/:cinemaId" component={Details}></Route>
            <Redirect from="/" to="/films" exact></Redirect>
            <Route component={NotFound}></Route>
        </Switch>
      </Router>
      </div>
    )
  }
}
