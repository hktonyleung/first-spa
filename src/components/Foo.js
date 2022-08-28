import React from 'react'

export default function Foo(props) {
  return (
    <div>
        <hr />
        Hi I'm a Foo component with the headline:
        <h2>{props.block.headline}</h2>
    </div>
  )
}
