import React from 'react'

export default function Bar(props) {
  return (
    <div>
        <hr />
        Hi I'm a Bar component with the headline:
        <h2>{props.block.title}</h2>
    </div>
  )
}
