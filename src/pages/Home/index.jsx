import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 style={{ color: '#fff' }}>Home Content</h3>
        <div className="row">
          <ul className="nav">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/Message">Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/message" />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}
