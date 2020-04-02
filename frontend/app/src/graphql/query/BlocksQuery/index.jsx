/* --- Global --- */
import {useEffect, useState} from 'react';
import {Query} from 'react-apollo';
import {Component} from '@horizin/ui-compose';

/* --- Local --- */
import {GET_BLOCKS, BLOCK_CREATED} from '@queries';

/* --- BlockQuery : Component --- */
const BlockQuery = ({children}) => {
  return (
    <>
      <Query query={GET_BLOCKS} variables={{limit: 10}}>
        {({data, refetch, subscribeToMore}) => (
          <BlockList
            refetch={refetch}
            data={data}
            subscribeToMore={subscribeToMore}>
            {children}
          </BlockList>
        )}
      </Query>
    </>
  );
};

const BlockList = ({refetch, data, subscribeToMore, children}) => {
  let [list, setList] = useState([]);
  let [subscription, setSubscription] = useState();

  const concat = (list, input) => {
    return list.concat(input);
  };

  useEffect(() => {
    SubscribeToBlock(list, setList);
  }, []);

  useEffect(() => {
    if (data && data.blockList) setList(concat(list, data.blockList));
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

  const SubscribeToBlock = (lists, setLists) => {
    subscribeToMore({
      document: BLOCK_CREATED,
      updateQuery: (previousResult, {subscriptionData, ...rest}) => {
        console.log(subscriptionData, 'subscriptionData');
        if (!subscriptionData.data) {
          return previousResult;
        }
        const {blockCreated} = subscriptionData.data;
        if (blockCreated.block) {
          setSubscription(blockCreated.block);
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
export default BlockQuery;
