import { Icon, IconID } from './Icon'

export interface ButtonProps {
  iconID?: IconID
  text?: string
}

export function Button(props: ButtonProps) {
  return (
    <button className="button">
      {props.iconID ? createIcon(props.iconID) : null}
      {props.text ? <span className="button-text">{props.text}</span> : null}
    </button>
  )
}

function createIcon(id: IconID) {
  return (
    <Icon
      id={id}
      size={20}
      color='#fff'
    />
  )
}
