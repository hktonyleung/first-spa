import React from 'react'
import { InputLabel} from '@mui/material'
import Input from "./components/Input";
import SelectComponent from './components/SelectComponent';
import RadioButtonsGroup from './components/RadioButtonsGroup';

export default function Questions(block) {

  const QuestionsList = {
    question: Input,
    input: Input,
    select: SelectComponent,
    choice: RadioButtonsGroup,
  };

  // component does exist
  if (typeof QuestionsList[block.component] !== "undefined") {
    return React.createElement(QuestionsList[block.component], {
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
