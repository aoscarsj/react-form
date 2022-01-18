import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function DeliveryData({ onSubmit }) {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ cep, address, number, state, city });
      }}
    >
      <TextField
        id='cep'
        label='cep'
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        type='number'
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <TextField
        id='address'
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
        label='Address'
        type='text'
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <TextField
        id='number'
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        label='number'
        type='number'
        variant='outlined'
        margin='normal'
      />
      <TextField
        id='state'
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
        label='State'
        type='text'
        variant='outlined'
        margin='normal'
      />
      <TextField
        id='city'
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
        label='City'
        type='text'
        variant='outlined'
        margin='normal'
      />
      <Button type='submit' variant='contained' fullWidth>
        End Registration
      </Button>
    </form>
  );
}

export default DeliveryData;
