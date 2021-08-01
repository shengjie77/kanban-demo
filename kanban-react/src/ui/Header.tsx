import { Button } from './Button'
import { IconID } from './Icon'


export function Header() {
  return (
    <header className="header">
      <Button iconID={IconID.Grid} />
      <Button iconID={IconID.House} />
      <Button iconID={IconID.Board} text="Boards" />
    </header>
  )
}
