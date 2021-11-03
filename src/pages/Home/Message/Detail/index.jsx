import React, { Component } from 'react'
// import {qs} from 'url-parse'

const dataArr = [
  { id: '1', content: 'Hello World!' },
  { id: '2', content: 'Hello React!' },
  { id: '3', content: 'Hello Vue!' }
]

export default class Detail extends Component {
  render() {
    // const { id, title } = this.props.match.params   1.params

    // const { search } = this.props.location   2.search
    // const {id, title} = qs.parse(search)

    const { id, title } = this.props.location.state   // 3.state

    const res = dataArr.find((data) => {
      return data.id === id
    })
    return (
      <ul style={{ listStyle: 'none' }}>
        <li>ID:{id}</li>
        <li style={{ margin: '10px 0' }}>Title:{title}</li>
        <li style={{ color: 'tomato' }}>Content:{res.content}</li>
      </ul>
    )
  }
}
