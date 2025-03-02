import React, { useState } from "react";
import { Grid } from "@zendeskgarden/react-grid";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { SkeletonLoading } from "../../components/SkeletonLoading/SkeletonLoading";
import { Warning } from "../../components/Warning/Warning";
import OrderList from "../../components/OrderList/OrderList";

interface SearchPageProps {
  onSelect: (data: any) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ onSelect }) => {
  const [Data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchError, setSearchError] = useState<boolean>(false);

  const searchUser = async () => {
    setIsLoading(true);
    setSearchError(false);

    try {
      const response = [
        {
          order_number: "200009132219448",
          purchase_date: "26/08/2024",
        },
        {
          order_number: "42355477",
          purchase_date: "02/08/2024",
        },
        {
          order_number: "Número do pedido filho",
          purchase_date: "Data da compra",
        },
      ];

      setData(response);
    } catch (error) {
      setSearchError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Grid style={{ width: "100%" }}>
      <h3 style={{ color: "#2f3941" }}>
        Search By ID or order ID
      </h3>
      <SearchInput
        search={searchUser}
        isLoading={isLoading}
      />

      {isLoading ? (
        <SkeletonLoading />
      ) : searchError ? (
        <Warning
          type="warning"
          title="Not found"
          text="No result"
          close={() => setSearchError(false)}
        />
      ) : (
        <OrderList orders={Data} onSelect={onSelect} />
      )}
    </Grid>
  );
};

export default SearchPage;
