function validateCpf(cpf) {
   if (cpf.length !== 11)
      return { valid: false, text: 'The CPF must have eleven digits.' }
   return { valid: true, text: '' }
}
function validatePassword(password) {
   if (password.length < 4 || password.length > 72)
      return { valid: false, text: 'The password must be between 4 and 72 digits.' }
   return { valid: true, text: '' }
}
export { validatePassword, validateCpf }