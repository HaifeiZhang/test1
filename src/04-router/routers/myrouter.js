import React, { Component } from 'react'
//import { Route } from 'react-router-dom/cjs/react-router-dom'
import { HashRouter,Route,Redirect,Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'

export default class myrouter extends Component {
  render() {
    return (
      <div>
      <HashRouter>
        <Switch>
            <Route path="/films" component={Films}></Route>
            <Route path="/cinemas" component={Cinemas}></Route>
            <Route path="/center" component={Center}></Route>
            <Redirect from="/" to="/films" exact></Redirect>
            <Route component={NotFound}></Route>
        </Switch>
      </HashRouter>
      </div>
    )
  }
}
