/* --- Global --- */
import idx from "idx";
import React from "react";

/* --- Local --- */
import Table from "../components/ContractEventTable";
import useContractEventListQuery from "../graphql/useContractEventListQuery";

/* --- Component --- */
const ContractEventDetails = ({ address }) => {
  const events = useContractEventListQuery(address);
  return (
    <div>
      <h1>Contracts Event</h1>
      <Table data={idx(events, (_) => _.parsed)} />
    </div>
  );
};
export default ContractEventDetails;
