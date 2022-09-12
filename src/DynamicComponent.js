import React from 'react'
import Components from './Components'

export default function DynamicComponent() {

    const data = {
        content: {
          body: [
            {
              _uid: "BUY6Drn9e1",
              component: "foo",
              headline: "Foo"
            },
            {
              _uid: "gJZoSLkfZV",
              component: "bar",
              title: "Bar"
            },
            {
              _uid: "X1JAfdsZxy",
              component: "foo",
              headline: "Another headline"
            },
            {
                _uid: "gJZoSLkfZa",
                component: "bar",
                title: "Another title 1"
            },
          ]
        }
      };

    return (
        <div>{data.content.body.map(block => Components(block))}</div>
    )
}
