import React from 'react'
import { Button, Typography } from '@mui/material'

export default function MUI() {

  return (
    <div className='App'>
        <Typography variant='myvariant'>This is typography</Typography>
        <Button color='secondary' variant='contained'>Hello from MUI</Button>
    </div>
  )
}
