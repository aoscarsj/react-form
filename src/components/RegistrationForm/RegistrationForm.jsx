import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

function RegistrationForm() {
  return (
    <form>
      <label>Name</label>
      <input type='text'></input>

      <label>Last Name</label>
      <input type='text'></input>

      <label>CPF</label>
      <input type='text'></input>

      <label>Promotions</label>
      <input type='checkbox'></input>

      <label>News Letter</label>
      <input type='checkbox'></input>
      <Button type='submit' variant='contained'>
        Confirm
      </Button>
    </form>
  );
}

export default RegistrationForm;
