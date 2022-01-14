import { Button, TextField } from '@mui/material';
import React from 'react';

function UserData({ onSubmit }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <TextField
        id='email'
        label='email'
        type='email'
        variant='outlined'
        margin='normal'
        required
        fullWidth
      />
      <TextField
        id='password'
        label='password'
        type='password'
        variant='outlined'
        required
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