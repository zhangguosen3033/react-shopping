import React, {Component} from 'react'
import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'
const home = asyncComponent(() => import("../pages/home/home"))
const mine = asyncComponent(() => import("../pages/mine/mine"))
const shop = asyncComponent(() => import("../pages/shop/shop"))
const catory = asyncComponent(() => import("../pages/catory/catory"))

export default class RouterConfig extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/home" component= {home} />
          <Route path="/mine" component= {mine} />
          <Route path="/shop" component= {shop} />
          <Route path="/catory" component= {catory} />
          <Redirect exact from='/' to='/home'/>
        </Switch>
      </HashRouter>
    )
  }
}
