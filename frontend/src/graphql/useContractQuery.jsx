/* --- Global --- */
import { useQuery } from "react-apollo";

/* --- Local --- */
import { GET_CONTRACT } from "./query_stringsqueries";

/**
 * @name useContractQuery
 * @param {Object} filters
 * @param {Integer} limit
 * @param {Function} children
 */
const useContractQuery = (address) => {
  const { loading, error, data, refetch } = useQuery(GET_CONTRACT, {
    variables: {
      address,
    },
  });

  return {
    data,
    loading,
    error,
    refetch,
  };
};

export default useContractQuery;
