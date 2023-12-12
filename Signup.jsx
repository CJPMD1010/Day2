import {Button,TextField,Typography} from '@mui/material'
import React from 'react'

export const Signup = () => {
  return (
    <div>
        <Typography variant='h5'>SignUp Here</Typography><br></br>
        <TextField variant='outlined' label="Enter First Name"/><br></br><br></br>
        <TextField variant='outlined' label="Enter Last Name"/><br></br><br></br>
        <TextField variant='outlined' label="Enter Age"/><br></br><br></br>
        <TextField variant='outlined' label="Enter Email"/><br></br><br></br>
        <TextField variant='outlined' type="password" label="Enter Password"/><br></br><br></br>
        <Button variant='contained'>SignUp</Button>

    </div>
  )
}

export default Signup
