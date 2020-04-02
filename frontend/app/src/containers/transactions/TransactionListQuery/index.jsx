import {useEffect, useState} from 'react';
import {Query} from 'react-apollo';

import {GET_TRANSACTIONS, TRANSACTION_CREATED} from '@queries';

/* --- TransactionQuery : Component --- */
const TransactionQuery = props => {
  return (
    <Query query={GET_TRANSACTIONS} variables={{limit: 10}}>
      {({data, refetch, subscribeToMore}) => (
        <TransactionList
          refetch={refetch}
          data={data}
          subscribeToMore={subscribeToMore}
        />
      )}
    </Query>
  );
};

const TransactionList = ({refetch, data, subscribeToMore}) => {
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

  return list === 0 ? null : (
    <Atom.Flex column>
      {list.map(item => (
        <TransactionCard tx={item} />
      ))}
    </Atom.Flex>
  );
};

const TransactionCard = ({tx}) => {
  return !tx ? null : (
    <Atom.Flex column card sx={{p: 0}}>
      <Atom.Box sx={{p: 3}}>
        <Atom.Span title>
          <strong>Hash:</strong>
          {tx.blockHash}
        </Atom.Span>
        <Atom.Span block tagline>
          <strong>BlockNumber:</strong>
          {tx.blockNumber}
        </Atom.Span>
      </Atom.Box>
      <Atom.Box sx={{bg: 'gray', p: 4}}>
        <Atom.Heading as="h4" sx={{fontSize: [1, 1, 2], mb: 0}}>
          Data
        </Atom.Heading>
        <Atom.HorizontalRule sx={{my: 3}} />
        <Atom.Span wordWrap>{tx.data}</Atom.Span>
      </Atom.Box>
      <Atom.Flex between sx={{bg: 'smoke', p: [3, 3, 4]}}>
        <Atom.Span block>To: {tx.to}</Atom.Span>
        <Atom.Span block>From: {tx.from}</Atom.Span>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default TransactionQuery;
