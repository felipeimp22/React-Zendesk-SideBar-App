// AddressPage.tsx
import React, { useState } from 'react';

const AddressPage = (selectedData) => {
  return (
    <>
      <h2>Address Page</h2>
      <pre>{JSON.stringify(selectedData, null, 2)}</pre>
    </>
  );
};

export default AddressPage;
