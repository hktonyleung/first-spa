import React, { useContext } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { SurveyContext } from '../SurveyContext'
import { Controller } from "react-hook-form";

export default function RadioButtonsGroup(props) {
  const {register, errors, control } = useContext(SurveyContext)
  return (

<FormControl component="fieldset">
  <FormLabel id="demo-radio-buttons-group-label">{props.block.title}</FormLabel>
  <Controller
    rules={{ required: true }}
    control={control}
    name={props.block.name}
    render={({ field }) => (
      <RadioGroup {...field}>
        {props.block.items.map(item=>( 
          <FormControlLabel value={item.value} control={<Radio />} label={item.text} />
        ))}
      </RadioGroup>
    )}
  />

    {/* 
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{props.block.title}</FormLabel>
      <Controller
        control={control}
        name={props.block.name}
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label" 
            onIonChange={({ detail: { value } }) => onChange(value)}
          >
            {props.block.items.map(item=>( 
              <FormControlLabel value={item.value} control={<Radio />} label={item.text} />
            ))}
              
          </RadioGroup>
        )}
      />
    </FormControl>  
  
    */}

</FormControl>


  );
}
