import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

function RegistrationForm({ onSubmit }) {
  // deconstructing the object 'props'
  const [name, setName] = useState('Artur');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [newsLetter, setNewsLetter] = useState(true);
  const [promotions, setPromotions] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ name, lastName, cpf, promotions, newsLetter });
      }}
    >
      <TextField
        id='name'
        label='Name'
        fullWidth
        margin='normal'
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        value={lastName}
        id='lastName'
        label='Last Name'
        fullWidth
        margin='normal'
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />

      <TextField
        id='cpf'
        label='CPF'
        fullWidth
        margin='normal'
        value={cpf}
        onChangeCapture={(event) => {
          setCpf(event.target.value);
        }}
      />
      <FormControlLabel
        label='Promotions'
        control={
          <Switch
            checked={promotions}
            name='promotions'
            color='primary'
            onChange={(event) => {
              setPromotions(event.target.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label='News Letter'
        control={
          <Switch
            checked={newsLetter}
            name='newsLetter'
            onChange={(event) => {
              setNewsLetter(event.target.checked);
            }}
            color='primary'
          />
        }
      />

      <Button type='submit' variant='contained'>
        Confirm
      </Button>
    </form>
  );
}

export default RegistrationForm;
