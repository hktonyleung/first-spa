import React, { useState } from 'react'
import { InputLabel, Select, MenuItem } from '@mui/material'


export default function SelectComponent(props) {

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>Select
        <InputLabel id="demo-simple-select-label">{props.block.title}</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            fullWidth
        >
            {
              props.block.items.map(item=>(
                <MenuItem value={item.value}>{item.text}</MenuItem>
              ))
            }
            

        </Select>
    </div>
  )
}
