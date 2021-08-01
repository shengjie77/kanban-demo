import { Icon, IconID } from './Icon'

export interface ButtonProps {
  iconID?: IconID
  text?: string
}

export function Button(props: ButtonProps) {
  return (
    <button className="button">
      {props.iconID ? createIcon(props.iconID) : null}
      {props.text ? <span>{props.text}</span> : null}
    </button>
  )
}

function createIcon(id: IconID) {
  return (
    <Icon
      id={id}
      size={24}
      color='#fff'
    />
  )
}
