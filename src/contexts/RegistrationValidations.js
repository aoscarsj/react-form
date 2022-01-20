import React from 'react';

const RegistrationValidations = React.createContext( // def oq ele fara por padrao, se n tiver um provider
   { cpf: noValidate, password: noValidate, name: noValidate, }

);
function noValidate(data) {
   console.log(data);
   return { valid: true, text: '' }
}
export default RegistrationValidations;