import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import RegistrationValidations from '../../contexts/RegistrationValidations';

function UserData({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ password: { valid: true, text: '' } });

  const validations = useContext(RegistrationValidations);
  function validateFields(event) {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
  }
  function canSend() {
    for (let field in errors) if (!errors[field].valid) return false;
    return true;
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSend()) onSubmit({ email, password });
      }}
    >
      <TextField
        id='email'
        value={email}
        label='email'
        type='email'
        variant='outlined'
        name='email'
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
        error={!errors.password.valid}
        helperText={errors.password.text}
        onBlur={validateFields}
        label='password'
        type='password'
        variant='outlined'
        name='password'
        required
        margin='normal'
        fullWidth
      />
      <Button type='submit' variant='contained' color='primary'>
        Next
      </Button>
    </form>
  );
}
export default UserData;
