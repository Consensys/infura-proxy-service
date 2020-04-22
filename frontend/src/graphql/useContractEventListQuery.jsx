/* --- Global --- */
import React from "react";
import { useQuery } from "react-apollo";

/* --- Local --- */
import { GET_EVENT_LIST, EVENT_CREATED } from "./query_strings.js";

/**
 * @name useContractEventListQuery
 * @param {Object} filters
 * @param {Integer} limit
 * @param {Function} children
 */
const useContractEventListQuery = ({ limit, page }) => {
  const [parsed, setParsed] = React.useState([]);
  let [subscription, setSubscription] = React.useState();
  const { loading, error, data, refetch, subscribeToMore } = useQuery(
    GET_EVENT_LIST,
    {
      variables: {
        limit: 100,
        page,
      },
    }
  );

  const concat = (list, input) => {
    return list.concat(input);
  };
  React.useEffect(() => {
    if (subscription) {
      setSubscription(undefined);
      setParsed(concat(parsed, subscription));
    }
  }, [subscription]);

  React.useEffect(() => {
    subscribeToMore({
      document: EVENT_CREATED,
      updateQuery: (previousResult, { subscriptionData, ...rest }) => {
        console.log(subscriptionData, "subscriptionData");
        if (!subscriptionData.data) {
          return previousResult;
        }
        const { eventCreated } = subscriptionData.data;
        if (eventCreated.event) {
          setSubscription(eventCreated.event);
        }
      },
    });
  }, [subscribeToMore]);

  React.useMemo(() => {
    if (data && Array.isArray(data.eventList)) {
      const l = data.eventList.map((d) => {
        let i = {};
        Object.keys(d).forEach((k) => {
          if (k === "event_abi" || k === "raw_event" || k === "json_event") {
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

export default useContractEventListQuery;
