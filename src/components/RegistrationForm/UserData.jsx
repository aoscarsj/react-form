import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function UserData({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ email, password });
      }}
    >
      <TextField
        id='email'
        value={email}
        label='email'
        type='email'
        variant='outlined'
        margin='normal'
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        required
        fullWidth
      />
      <TextField
        id='password'
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
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
