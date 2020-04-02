import {useEffect, useState} from 'react';
import {Query} from 'react-apollo';

import {GET_TRANSACTION} from '@queries';

/* --- TransactionQuery : Component --- */
const TransactionQuery = props => {
  return (
    <Query query={GET_TRANSACTION} variables={{hash: props.hash}}>
      {({data, refetch}) => <TransactionCard request={refetch} data={data} />}
    </Query>
  );
};

const TransactionCard = ({data, request}) => {
  const [tx, setTransaction] = useState(undefined);
  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    if (data.transaction) setTransaction(data.transaction);
  }, [data]);

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
