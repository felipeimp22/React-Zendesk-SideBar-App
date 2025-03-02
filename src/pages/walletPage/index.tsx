// WalletPage.tsx
import React, { useState, useEffect } from 'react';



const WalletPage = (selectedData) => {
  return (
    <>
      <h2>Wallet Page</h2>
      <pre>{JSON.stringify(selectedData, null, 2)}</pre>
    </>
  );
};

export default WalletPage;
