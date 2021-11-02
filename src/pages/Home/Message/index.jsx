import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '1', title: 'Message001' },
      { id: '2', title: 'Message002' },
      { id: '3', title: 'Message003' }
    ]
  }
  render() {
    const { messageArr } = this.state
    return (
      <React.Fragment>
        <ul style={{ listStyle: 'none' }}>
          {
            messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id} style={{margin:'5px 0'}}>
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <Route path="/home/message/detail/:id/:title" component={Detail} />
      </React.Fragment>
    )
  }
}
