import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import './App.css';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/400.css';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>Registration Form</Typography>
      <RegistrationForm onSubmit={onSubmit} />
    </Container>
  );
}

function onSubmit(data) {
  console.log(data);
}

export default App;
