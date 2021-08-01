import React from 'react'
import { Header } from './Header'
import './main.css'

export function Main() {
  return (
    <div className="main">
      <Header></Header>
      <Board />
    </div>
  )
}

function Board() {
  return (
    <main className="board">
      <BoardHeader></BoardHeader>
      <BoardContent></BoardContent>
    </main>
  )
}

function BoardHeader() {
  return (
    <div className="board-header">board header</div>
  )

}

function BoardContent() {
  return (
    <div className="board-content">
      ContentArea
      <ol>
        <li><List></List></li>
        <li><List></List></li>
        <li><List></List></li>
      </ol>
    </div>
  )
}

function List() {
  return (
    <div>List
      <ul>
        <li><Card></Card></li>
        <li><Card></Card></li>
        <li><Card></Card></li>
      </ul>
    </div>
  )
}

function Card() {
  return (
    <div>Card</div>
  )
}
