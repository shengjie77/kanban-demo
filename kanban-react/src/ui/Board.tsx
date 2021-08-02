import { Avatar } from './Avatar'
import { Button } from './Button'
import { IconID } from './Icon'

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