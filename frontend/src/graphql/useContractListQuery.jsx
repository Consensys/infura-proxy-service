/* --- Global --- */
import React from "react";
import { useQuery } from "react-apollo";

/* --- Local --- */
import { GET_CONTRACT_LIST } from "./query_strings.js";

/**
 * @name useContractQuery
 * @param {Object} filters
 * @param {Integer} limit
 * @param {Function} children
 */
const useContractQuery = ({ limit, page }) => {
  const [parsed, setParsed] = React.useState();
  const { loading, error, data, refetch } = useQuery(GET_CONTRACT_LIST, {
    variables: {
      limit,
      page,
    },
  });

  React.useMemo(() => {
    if (data && Array.isArray(data.contractList)) {
      const l = data.contractList.map((d) => {
        let i = {};
        Object.keys(d).forEach((k) => {
          if (k === "event_topics") {
            i[k] = JSON.parse(d[k]);
          } else {
            i[k] = d[k];
          }
        });
        return i;
      });
      setParsed(l);
    }
  }, [data]);

  return {
    data,
    parsed,
    loading,
    error,
    refetch,
  };
};

export default useContractQuery;
