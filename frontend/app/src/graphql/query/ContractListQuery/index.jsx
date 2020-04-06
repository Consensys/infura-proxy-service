/* --- Global --- */
import {useEffect, useState} from 'react';
import {Query} from 'react-apollo';
import {Component} from '@horizin/ui-compose';

/* --- Local --- */
import {GET_CONTRACT_LIST, CONTRACT_CREATED} from '@queries';

const convertToObject = item => {
  let i = {};
  Object.keys(item).forEach(k => {
    if (k === 'abi' || k === 'event_topics') {
      i[k] = JSON.parse(item[k]);
    } else {
      i[k] = item[k];
    }
  });
  return i;
};

/* --- ContractListQuery : Component --- */
const ContractListQuery = ({children}) => {
  return (
    <>
      <Query query={GET_CONTRACT_LIST} variables={{limit: 10}}>
        {({data, refetch, subscribeToMore}) => (
          <ContractList
            refetch={refetch}
            data={data}
            subscribeToMore={subscribeToMore}>
            {children}
          </ContractList>
        )}
      </Query>
    </>
  );
};

const ContractList = ({refetch, data, subscribeToMore, children}) => {
  let [list, setList] = useState([]);
  let [subscription, setSubscription] = useState();

  const concat = (list, input) => {
    return list.concat(input);
  };

  useEffect(() => {
    refetch();
    SubscribeToContract(list, setList);
  }, []);

  useEffect(() => {
    // console.log(data, 'datadata');
    if (data && data.contractList) {
      data.contractList.map(item => convertToObject(item));
      setList(
        concat(
          list,
          data.contractList.map(item => convertToObject(item)),
        ),
      );
    }
  }, [data]);

  useEffect(() => {
    if (subscription) {
      setList(concat(list, subscription));
      setSubscription(undefined);
    }
  }, [subscription]);

  useEffect(() => {
    console.log(list, 'listtt');
  }, [list]);

  const SubscribeToContract = (lists, setLists) => {
    subscribeToMore({
      document: CONTRACT_CREATED,
      updateQuery: (previousResult, {subscriptionData, ...rest}) => {
        console.log(subscriptionData, 'subscriptionData');
        if (!subscriptionData.data) {
          return previousResult;
        }
        const {contractCreated} = subscriptionData.data;
        if (contractCreated.contract) {
          setSubscription(contractCreated.contract);
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
export default ContractListQuery;
