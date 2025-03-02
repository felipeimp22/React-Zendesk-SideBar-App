import React, { useState } from 'react';
import SearchPage from '../pages/searchPage';
import TabsNavigation from '../components/TabsNavigation/tabsNavigation';

const Sidebar: React.FC = () => {
  const [isSearching, setIsSearching] = useState(true); 
  const [selectedData, setSelectedData] = useState<any>(null); 

  const handleSelect = (data: any) => {
    setSelectedData(data);
    setIsSearching(false);
  };

  return (
    <>
      {isSearching ? (
        <SearchPage onSelect={handleSelect} /> 
      ) : (
        <TabsNavigation selectedData={selectedData} />
      )}
    </>
  );
};

export default Sidebar;
