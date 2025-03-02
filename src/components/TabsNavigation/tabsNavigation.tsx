// src\components\TabsNavigation\index.tsx
import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from "@zendeskgarden/react-tabs";
import OrderPage from '../../pages/orderPage';
import WalletPage from '../../pages/walletPage';
import AddressPage from '../../pages/addressPage';
import CustomerRegistrationPage from '../../pages/registrationPage';


const TabsNavigation: React.FC<any> = ({ selectedData }) => {
  const [selectedTab, setSelectedTab] = useState('Orders');

  return (
    <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
      <TabList>
        <Tab item="Orders">Orders</Tab>
        <Tab item="Wallet">Wallet</Tab>
        <Tab item="Address">Address</Tab>
        <Tab item="Generic">Generic</Tab>
      </TabList>
      <TabPanel item="Orders">
        <OrderPage selectedData={selectedData} />
      </TabPanel>
      <TabPanel item="Wallet">
        <WalletPage selectedData={selectedData}  />
      </TabPanel>
      <TabPanel item="Address">
        <AddressPage selectedData={selectedData} />
      </TabPanel>
      <TabPanel item="Generic">
        <CustomerRegistrationPage selectedData={selectedData} />
      </TabPanel>
    </Tabs>
  );
};

export default TabsNavigation;
