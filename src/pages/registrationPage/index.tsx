// CustomerRegistrationPage.tsx
import React, { useState, useEffect } from 'react';

const CustomerRegistrationPage = (selectedData) => {
  return (
    <>
      <h2> Generic</h2>
      <pre>{JSON.stringify(selectedData, null, 2)}</pre>
    </>
  );
};

export default CustomerRegistrationPage;


