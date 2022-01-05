import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import './App.css';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/400.css';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>Registration Form</Typography>
      <RegistrationForm onSubmit={onSubmit} validateCpf={validateCpf} />
    </Container>
  );
}

function onSubmit(data) {
  console.log(data);
}
function validateCpf(cpf) {
  if (cpf.length != 11)
    return { valid: false, text: 'The CPF must have eleven digits.' }
  return { valid: true, text: '' }
}
export default App;
