import { Typography } from '@mui/material';
import React, { useState } from 'react';
import DeliveryData from './DeliveryData';
import PersonalData from './PersonalData';
import UserData from './UserData';

function RegistrationForm({ onSubmit, validateCpf }) {
  const [currentPage, setCurrentPage] = useState(0);

  function nextStage() {
    setCurrentPage(currentPage + 1);
  }

  function currentForm(current) {
    switch (current) {
      case 0:
        return <UserData onSubmit={nextStage} />;
      case 1:
        return <PersonalData onSubmit={nextStage} validateCpf={validateCpf} />;
      case 2:
        return <DeliveryData onSubmit={onSubmit} />;
      default:
        return <Typography>Error when selecting form.</Typography>;
    }
  }

  return <>{currentForm(currentPage)}</>;
}

export default RegistrationForm;
