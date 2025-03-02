import React from 'react';

const OrderPage: React.FC<any> = ({ selectedData }) => {
  return (
    <>
      <h2>Orders Page</h2>
      <pre>{JSON.stringify(selectedData, null, 2)}</pre>
    </>
  );
};

export default OrderPage;
