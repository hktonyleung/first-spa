import React, { useContext } from 'react'
import { TextField } from '@mui/material'
import { useForm, Controller } from "react-hook-form";
import { SurveyContext } from '../SurveyContext'


export default function Input(props) {

  const {register, errors } = useContext(SurveyContext)
  return (
    <>
      <TextField id="standard-basic" label={props.block.title} variant="outlined" fullWidth 
      {...register(props.block.name, {
        required: props.block.message,
      })}
      />        
      { errors[props.block.name] && <p>{errors[props.block.name].message}</p> }
      {/*
        <input
          type="text"
          id={props.block.name}
          name={props.block.name}
          className="text-input" {...register(props.block.name, {
              required: 'Please input username',
          })} 
        />        
      */}
    </>
  )
}
