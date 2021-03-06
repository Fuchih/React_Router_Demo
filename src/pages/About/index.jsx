import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 style={{ color: '#fff' }}>About Content</h3>
        <p>
          React（有時叫React.js或ReactJS），是一個為資料提供彩現為HTML視圖的開源JavaScript
          庫。React視圖通常採用包含以自訂HTML標記規定的其他組件的組件彩現。React為程式設計師提供了一種子組件不能直接影響外層組件（"data flows
          down"）的模型，資料改變時對HTML文件的有效更新，和現代單頁應用中組件之間乾淨的分離。 它由Facebook、Instagram和一個由個人開發者和企業組成的社群維護。
        </p>
      </React.Fragment>
    )
  }
}
