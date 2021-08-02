import { Avatar } from './Avatar'
import { Button } from './Button'
import { IconID } from './Icon'
import { IconButton } from './IconButton'

export function Board() {
  return (
    <main className="board">
      <BoardHeader></BoardHeader>
      <BoardContent></BoardContent>
    </main>
  )
}

function BoardHeader() {
  return (
    <div className="board-header">
      <Button iconID={IconID.Calendar} text="Calendar" />
      <Divider />
      <MemberList />
      <Button text="Invite" />
    </div>
  )

}

function Divider() {
  return (
    <div className="divider" />
  )
}

function MemberList() {
  return (
    <div className="member-list">
      <Avatar url="/avatar/dog.png" size={28} />
      <Avatar url="/avatar/elephant.png" size={28} />
      <Avatar url="/avatar/rabbit.png" size={28} />
      <Avatar url="/avatar/snail.png" size={28} />
      <Avatar url="/avatar/fox.png" size={28} />
    </div>
  )
}

function BoardContent() {
  return (
    <div className="board-content">
      <ol className="board-list-wrapper">
        <BoardList></BoardList>
        <BoardList></BoardList>
        <BoardList></BoardList>
        <BoardList></BoardList>
        <BoardList></BoardList>
        <BoardList></BoardList>
        <BoardList></BoardList>
        <BoardList></BoardList>
        <BoardList></BoardList>
      </ol>
    </div>
  )
}

function BoardList() {
  return (
    <li className="board-list">
      <BoardListHeader />
      <BoardListBody />
      <BoardListFooter />
    </li>
  )
}

function BoardListHeader() {
  return (
    <div className="board-list__header">
      <span className="board-list__header-text">To Do</span>
      <IconButton iconID={IconID.More} />
    </div>
  )
}

function BoardListBody() {
  return (
    <ol className="board-list__body">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ol>
  )
}

function BoardListFooter() {
  return (
    <div className="board-list__footer">
      <IconButton iconID={IconID.Add} text="Add a card" />
      <IconButton iconID={IconID.Video} />
    </div>
  )
}

function Card() {
  return (
    <div className="card">Card</div>
  )
}