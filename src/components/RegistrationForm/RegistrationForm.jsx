import { Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeliveryData from './DeliveryData';
import PersonalData from './PersonalData';
import UserData from './UserData';

// useState eh assincrona, ele agenda a atualizacao mas nao eh exatamente no momento
// useEffect => add um efeito para qnd algo no react for disparado.

function RegistrationForm({ onSubmit, validations }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [collectedData, setCollectedData] = useState({});

  useEffect(() => {
    if (currentPage === form.length - 1) onSubmit(collectedData);
  });

  const form = [
    <UserData onSubmit={collectData} validations={validations} />,
    <PersonalData onSubmit={collectData} validations={validations} />,
    <DeliveryData onSubmit={collectData} validations={validations} />,
    <Typography variant='h5'>Thanks for registering!</Typography>,
  ];

  function collectData(data) {
    setCollectedData({ ...collectedData, ...data });
    nextStage();
  }

  function nextStage() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <Stepper activeStep={currentPage}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Personal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Address</StepLabel>
        </Step>
        <Step>
          <StepLabel>End</StepLabel>
        </Step>
      </Stepper>
      {form[currentPage]}
    </>
  );
}

export default RegistrationForm;
