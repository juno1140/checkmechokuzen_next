import React from 'react'
import HEAD from 'next/head'
import Header from './Header'

const App = ({ children }) => (
  <div className="root">
    <HEAD>
      <title>ME2種試験直前確認問題</title>
      <meta name="description" content="当サイトは第41回第2種ＭＥ技術実力検定試験を受験される方向けに作成した確認問題サイトです。過去問を参考に30問(選択肢なし)用意しました。試験直前の確認としてご利用ください。" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@juno_taku"/>
      <meta property="og:url" content="https://check.mechokuzen.site" />
      <meta property="og:title" content="ME2種試験直前確認問題" />
      <meta property="og:description" content="当サイトは第41回第2種ＭＥ技術実力検定試験を受験される方向けに作成した確認問題サイトです。過去問を参考に30問(選択肢なし)用意しました。試験直前の確認としてご利用ください。" />
      <meta property="og:image" content="https://check.mechokuzen.site/siteImage.png" />
    </HEAD>
    <Header />
    <main>
      {children}
    </main>
  </div>
)

export default App
