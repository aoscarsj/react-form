import React from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

function RegistrationForm() {
  return (
    <form>
      <TextField id='name' label='Name' fullWidth margin='normal' />
      <TextField id='lastName' label='Last Name' fullWidth margin='normal' />

      <TextField id='cpf' label='CPF' fullWidth margin='normal' />
      <FormControlLabel
        label='Promotions'
        control={
          <Switch name='promotions' defaultChecked={true} color='primary' />
        }
      />
      <FormControlLabel
        label='News Letter'
        control={
          <Switch name='newsLetter' defaultChecked={true} color='primary' />
        }
      />

      <Button type='submit' variant='contained'>
        Confirm
      </Button>
    </form>
  );
}

export default RegistrationForm;
