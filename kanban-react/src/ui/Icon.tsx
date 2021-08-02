import React from 'react'
import { isPropertySignature } from 'typescript'

export enum IconID {
  Grid = 'Grid',
  House = 'House',
  Board = 'Board',
  Search = 'Search',
  Add = 'Add',
  Info = 'Info',
  Bell = 'Bell',
  Calendar = 'Calendar',
  More = 'More',
  Video = 'Video',
}

export interface IconProps {
  id: IconID
  size: number
  color: string
}

export function Icon(props: IconProps) {
  const map: any = {
    [IconID.Grid]: GridIcon,
    [IconID.House]: HouseIcon,
    [IconID.Board]: BoardIcon,
    [IconID.Search]: SearchIcon,
    [IconID.Add]: AddIcon,
    [IconID.Info]: InfoIcon,
    [IconID.Bell]: BellIcon,
    [IconID.Calendar]: CalendarIcon,
    [IconID.More]: MoreIcon,
    [IconID.Video]: VideoIcon,
  }

  const Constructor = map[props.id]

  if (!Constructor) {
    console.warn('Cannot find icon: ', props.id)
    return null;
  }

  return <Constructor width={props.size} height={props.size} color={props.color} />
}

type SVGProps = React.SVGProps<SVGSVGElement>

function GridIcon(props: SVGProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 6a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm7-7a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1h-2zm-1 7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zm7-7a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1h-2zm-1 7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zM5 16a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H5zm5 1a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zm7-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2z"
        fill="currentColor"
      />
    </svg>
  )
}

function HouseIcon(props: SVGProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.586 10.414A2 2 0 003 11.828V19a2 2 0 002 2h5a1 1 0 001-1v-6h2v6a1 1 0 001 1h5a2 2 0 002-2v-7.172a2 2 0 00-.586-1.414l-7.707-7.707a1 1 0 00-1.414 0l-7.707 7.707zM13 12a2 2 0 012 2v5h4v-7.172l-7-7-7 7V19h4v-5a2 2 0 012-2h2z"
        fill="currentColor"
      />
    </svg>
  )
}

function BoardIcon(props: SVGProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 1a1 1 0 011-1h4a1 1 0 011 1v10a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm9-1a1 1 0 00-1 1v6a1 1 0 001 1h4a1 1 0 001-1V6a1 1 0 00-1-1h-4z"
        fill="currentColor"
      />
    </svg>
  )
}

function SearchIcon(props: SVGProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 18a7.5 7.5 0 115.936-2.915l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006A7.467 7.467 0 0110.5 18zm5.5-7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
        fill="currentColor"
      />
    </svg>
  )
}

function AddIcon(props: SVGProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 3a1 1 0 00-1 1v7H4a1 1 0 100 2h7v7a1 1 0 102 0v-7h7a1 1 0 100-2h-7V4a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  )
}

function InfoIcon(props: SVGProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill="currentColor"
      />
      <path
        d="M11 11a1 1 0 112 0v5a1 1 0 11-2 0v-5zM13 8a1 1 0 11-2 0 1 1 0 012 0z"
        fill="currentColor"
      />
    </svg>
  )
}

function BellIcon(props: SVGProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a1 1 0 00-1 1v.078a4.687 4.687 0 00-1.867.715 4.51 4.51 0 00-1.527 1.76 5.914 5.914 0 00-.53 1.658A5.908 5.908 0 007 7.972V8L8 8H7v3.723l-2.857 4.762A1 1 0 005 18h14a1 1 0 00.858-1.515L17 11.723V8h-1l1-.001V7.972a2.613 2.613 0 00-.01-.215 5.901 5.901 0 00-.066-.546 5.913 5.913 0 00-.53-1.658 4.51 4.51 0 00-1.527-1.76A4.687 4.687 0 0013 3.078V3a1 1 0 00-1-1zM9 7.988V12a1 1 0 01-.143.514L6.767 16h10.467l-2.092-3.486A1 1 0 0115 12V7.988l-.005-.089a3.903 3.903 0 00-.044-.36 3.92 3.92 0 00-.345-1.092 2.512 2.512 0 00-.848-.99C13.378 5.203 12.825 5 12 5s-1.377.203-1.758.457a2.512 2.512 0 00-.848.99A3.918 3.918 0 009.05 7.54 3.911 3.911 0 009 7.99zM14 19a2 2 0 11-4 0h4z"
        fill="currentColor"
      />
    </svg>
  )
}

function CalendarIcon(props: SVGProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4v1H4.995A1.994 1.994 0 003 6.994v12.012C3 20.106 3.893 21 4.995 21h14.01A1.994 1.994 0 0021 19.006V6.994A1.996 1.996 0 0019.005 5H18V4a1 1 0 00-2 0v1H8V4a1 1 0 00-2 0zm-.75 5.571v8.147c0 .555.444.996.993.996h11.515a.998.998 0 00.992-.996V9.571H5.25zM9 13v-2.001H7V13h2zm8-2.001V13h-2v-2.001h2zM11 13h2.001v-2.001H11V13zm-4 4v-2h2v2H7zm4 0h2.001v-2H11v2zm6-2v2h-2v-2h2z"
        fill="currentColor"
      />
    </svg>
  )
}

function MoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M113.7 304C86.2 304 64 282.6 64 256c0-26.5 22.2-48 49.7-48 27.6 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48zM256 304c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.3-48 49.8-48 27.5 0 49.7 21.5 49.7 48 0 26.6-22.2 48-49.7 48zM398.2 304c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.2-48 49.8-48 27.5 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48z"
        fill="currentColor"
      />
    </svg>
  )
}

function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title />
      <path
        d="M47.1 12.3a2 2 0 00-1.9-.1L36 16.8V14a2 2 0 00-2-2H4a2 2 0 00-2 2v22a2 2 0 002 2h30a2 2 0 002-2v-2.8l9.1 4.6.9.2a2 2 0 002-2V14a2 2 0 00-.9-1.7zM32 34H6V16h26v18zm12-1.2l-8-4v-7.6l8-4v15.6z"
        fill="currentColor"
      />
    </svg>
  )
}