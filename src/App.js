import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import './App.css';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/400.css';
import './contexts/RegistrationValidations'
import { validatePassword, validateCpf } from './models/register'
import RegistrationValidations from './contexts/RegistrationValidations';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>Registration Form</Typography>
      <RegistrationValidations.Provider value={{ cpf: validateCpf, password: validatePassword }}>
        <RegistrationForm onSubmit={onSubmit} />
      </RegistrationValidations.Provider >
    </Container>
  );
}

function onSubmit(data) {
  console.log(data);
}

export default App;
