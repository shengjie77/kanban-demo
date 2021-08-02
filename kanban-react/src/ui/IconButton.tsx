import { Icon, IconID } from './Icon'

export interface IconButtonProps {
  iconID: IconID
  text?: string
}

export function IconButton(props: IconButtonProps) {
  return (
    <button className="icon-button">
      {createIcon(props.iconID)}
      {props.text ? <span>{props.text}</span> : null}
    </button>
  )
}

function createIcon(id: IconID) {
  return (
    <Icon
      id={id}
      size={16}
      color='#6b778c'
    />
  )
}
