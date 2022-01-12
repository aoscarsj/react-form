import React, { useState } from 'react';
import DeliveryData from './DeliveryData';
import PersonalData from './PersonalData';
import UserData from './UserData';

function RegistrationForm({ onSubmit, validateCpf }) {
  return (
    <>
      <PersonalData onSubmit={onSubmit} validateCpf={validateCpf} />
      <UserData />
      <DeliveryData />
    </>
  );
}

export default RegistrationForm;
