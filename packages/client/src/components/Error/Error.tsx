import React from 'react'
import './Error.scss'

type OwnProps = {
  error: string
  title: string
}

type Props = OwnProps

export const Error = ({ error, title }: Props) => {
  return (
    <div className="error">
      <h1 className="error--name">{error}</h1>
      <h2 className="error--title">{title}</h2>
      <button className="error--button">Назад к игре</button>
    </div>
  )
}
