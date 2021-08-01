
export interface AvatarProps {
  url: string
  size: number
}

export function Avatar(props: AvatarProps) {
  console.log(props.url)
  return (
    <div className="avatar" style={{backgroundImage: `url(${props.url})`, width: props.size, height: props.size}}></div>
  )
}
