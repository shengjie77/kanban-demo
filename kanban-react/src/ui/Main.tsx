import React from 'react'
import { Header } from './Header'
import { Board } from './Board'
import './main.css'

export function Main() {
  return (
    <div className="main">
      <Header></Header>
      <Board />
    </div>
  )
}

