import { Button, TextField } from '@mui/material';
import React from 'react';

function DeliveryData({ onSubmit }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <TextField
        id='cep'
        label='cep'
        type='number'
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <TextField
        id='address'
        label='Address'
        type='text'
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <TextField
        id='number'
        label='number'
        type='number'
        variant='outlined'
        margin='normal'
      />
      <TextField
        id='state'
        label='State'
        type='text'
        variant='outlined'
        margin='normal'
      />
      <TextField
        id='city '
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
