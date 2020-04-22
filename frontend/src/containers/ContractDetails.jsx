/* --- Global --- */
import idx from "idx";
import React from "react";

/* --- Local --- */
import Table from "../components/MaterialContractTable";
import useContractListQuery from "../graphql/useContractListQuery";

/* --- Component --- */
const ContractDetails = ({ address }) => {
  const contracts = useContractListQuery(address);

  return (
    <div>
      <h1>Contracts</h1>
      <Table data={idx(contracts, (_) => _.parsed)} />
    </div>
  );
};
export default ContractDetails;
