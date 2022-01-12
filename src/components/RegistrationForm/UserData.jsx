import { Button, TextField } from '@mui/material';
import React from 'react';

function UserData() {
  return (
    <form>
      <TextField
        id='email'
        label='email'
        type='email'
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <TextField
        id='password'
        label='password'
        type='password'
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <Button type='submit' variant='contained' color='primary'>
        Register
      </Button>
    </form>
  );
}
export default UserData;
