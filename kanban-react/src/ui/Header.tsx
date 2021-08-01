import { Button } from './Button'
import { IconID } from './Icon'
import { Avatar } from './Avatar'

export function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Button iconID={IconID.Grid} />
        <Button iconID={IconID.House} />
        <Button iconID={IconID.Board} text="Boards" />
      </div>
      <div className="header-center">
      </div>
      <div className="header-right">
        <Button iconID={IconID.Add} />
        <Button iconID={IconID.Info} />
        <Button iconID={IconID.Bell} />
        <Avatar url='/avatar/fox.png' size={32} />
      </div>
    </header>
  )
}
