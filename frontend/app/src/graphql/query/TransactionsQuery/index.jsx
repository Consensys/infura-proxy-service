/* --- Global --- */
import {useEffect, useState} from 'react';
import {Query} from 'react-apollo';
import {Component} from '@horizin/ui-compose';

/* --- Local --- */
import {GET_TRANSACTIONS, TRANSACTION_CREATED} from '@queries';

/* --- TransactionQuery : Component --- */
const TransactionQuery = ({children}) => {
  return (
    <>
      <Query query={GET_TRANSACTIONS} variables={{limit: 10}}>
        {({data, refetch, subscribeToMore}) => (
          <TransactionList
            refetch={refetch}
            data={data}
            subscribeToMore={subscribeToMore}>
            {children}
          </TransactionList>
        )}
      </Query>
    </>
  );
};

const TransactionList = ({refetch, data, subscribeToMore, children}) => {
  let [list, setList] = useState([]);
  let [subscription, setSubscription] = useState();

  const concat = (list, input) => {
    return list.concat(input);
  };

  useEffect(() => {
    SubscribeToTransaction(list, setList);
  }, []);

  useEffect(() => {
    if (data && data.transactions) setList(concat(list, data.transactions));
  }, [data]);

  useEffect(() => {
    if (subscription) {
      setList(concat(list, subscription));
      setSubscription(undefined);
    }
  }, [subscription]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  const SubscribeToTransaction = (lists, setLists) => {
    subscribeToMore({
      document: TRANSACTION_CREATED,
      updateQuery: (previousResult, {subscriptionData, ...rest}) => {
        if (!subscriptionData.data) {
          return previousResult;
        }
        const {transactionCreated} = subscriptionData.data;
        if (transactionCreated.transaction) {
          setSubscription(transactionCreated.transaction);
        }
      },
    });
  };

  return list === 0
    ? null
    : Component(children, {
        data: list,
      });
};
export default TransactionQuery;
