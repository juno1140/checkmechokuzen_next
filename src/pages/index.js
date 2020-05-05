import * as React from 'react'
import HEAD from 'next/head'
import App from '../components/App'
import Questions from '../components/Questions'

export default () => (
  <App>
    <div className="content">
      <div className="info">
        <p>
          確認問題 全30問(選択肢なしの一問一答形式)<br />
          解答の確認は「解答」ボタンを押してください。<br />
          問題文末尾の()内は参考とした過去問です。<br />
        </p>
      </div>
      <div className="question">
        <Questions />
      </div>
      <p className="link">過去に制作した実力テストは<a href="https://mechokuzen.site" target="_blank">こちら</a></p>
    </div>
  </App>
)
