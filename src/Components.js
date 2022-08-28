import React from "react";
import Foo from "./components/Foo";
import Bar from "./components/Bar";


export default function Components(block) {

    const ComponentsList = {
        foo: Foo,
        bar: Bar,
      };

    // component does exist
    if (typeof ComponentsList[block.component] !== "undefined") {
        return React.createElement(ComponentsList[block.component], {
            key: block._uid,
            block: block
        });
        }
        // component doesn't exist yet
        return React.createElement(
            () => <div>The component {block.component} has not been created yet.</div>,
            { key: block._uid }
        );
  }
