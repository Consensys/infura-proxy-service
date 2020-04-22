/* --- Global --- */
import idx from "idx";
import React from "react";

/* --- Local --- */
import Table from "../components/ContractEventMetaTable";
import useContractEventMetaListQuery from "../graphql/useContractEventMetaListQuery";

/* --- Component --- */
const ContractEventMetaDetails = ({ address }) => {
  const eventsMeta = useContractEventMetaListQuery(address);
  return (
    <div>
      <h1>Contracts Event Meta</h1>
      <Table data={idx(eventsMeta, (_) => _.parsed)} />
    </div>
  );
};
export default ContractEventMetaDetails;
