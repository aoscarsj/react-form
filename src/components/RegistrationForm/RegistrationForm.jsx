import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

function RegistrationForm() {
  const [name, setName] = useState('Artur');
  const [lastName, setLastName] = useState('');
  return (
    <form
      onSubmit={(event) => {
        console.log(name);

        event.preventDefault();
      }}
    >
      <TextField
        id='name'
        label='Name'
        fullWidth
        margin='normal'
        value={name}
        onChange={(event) => {
          let tempName = event.target.value;
          if (tempName.length >= 3) tempName = tempName.substring(0, 3);
          setName(tempName);
        }}
      />
      <TextField
        value={lastName}
        id='lastName'
        label='Last Name'
        fullWidth
        margin='normal'
      />

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
