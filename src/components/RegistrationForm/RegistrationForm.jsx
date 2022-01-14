import { Typography } from '@mui/material';
import React, { useState } from 'react';
import DeliveryData from './DeliveryData';
import PersonalData from './PersonalData';
import UserData from './UserData';

function RegistrationForm({ onSubmit, validateCpf }) {
  const [currentPage, setCurrentPage] = useState(0);

  const form = [
    <UserData onSubmit={nextStage} />,
    <PersonalData onSubmit={nextStage} validateCpf={validateCpf} />,
    <DeliveryData onSubmit={onSubmit} />,
  ];

  function nextStage() {
    setCurrentPage(currentPage + 1);
  }

  return <>{form[currentPage]}</>;
}

export default RegistrationForm;
