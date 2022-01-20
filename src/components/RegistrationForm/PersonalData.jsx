import React, { useContext, useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';
import RegistrationValidations from '../../contexts/RegistrationValidations';
function PersonalData({ onSubmit }) {
  // deconstructing the object 'props'
  const [name, setName] = useState('Artur');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [newsLetter, setNewsLetter] = useState(true);
  const [promotions, setPromotions] = useState(true);
  const [errors, setErrors] = useState({ cpf: { valid: true, text: '' } });

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
        if (canSend())
          onSubmit({ name, lastName, cpf, promotions, newsLetter });
      }}
    >
      <TextField
        id='name'
        label='Name'
        fullWidth
        margin='normal'
        name='name'
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        value={lastName}
        id='lastName'
        label='Last Name'
        name='lastName'
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
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        value={cpf}
        name='cpf'
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validateFields} //after the focus
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
        Next
      </Button>
    </form>
  );
}

export default PersonalData;
