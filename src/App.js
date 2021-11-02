import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink/index'

export default class Demo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row m-2 bg-secondary">
          <div className="col-xs-8">
              <h2>React Router Demo</h2>
          </div>
        </div>
        <div className="row m-2">
          <div className="col-sm-2 mb-2">
            <div className="list-group">
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col bg-info">
            <div className="panel">
              <div className="panel-body">
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Redirect to="/home" />
              </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
