/* --- Global --- */
import {useEffect, useState} from 'react';
import {Query} from 'react-apollo';
import {Component} from '@horizin/ui-compose';

/* --- Local --- */
import {GET_EVENT_META_LIST, EVENT_META_CREATED} from '@queries';

/* --- EventListQuery : Component --- */
const EventListQuery = ({children}) => {
  return (
    <>
      <Query query={GET_EVENT_META_LIST} variables={{limit: 10}}>
        {({data, refetch, subscribeToMore}) => (
          <EventList
            refetch={refetch}
            data={data}
            subscribeToMore={subscribeToMore}>
            {children}
          </EventList>
        )}
      </Query>
    </>
  );
};

const EventList = ({refetch, data, subscribeToMore, children}) => {
  let [list, setList] = useState([]);
  let [subscription, setSubscription] = useState();

  const concat = (list, input) => {
    return list.concat(input);
  };

  useEffect(() => {
    refetch();
    SubscribeToEvent(list, setList);
  }, []);

  useEffect(() => {
    console.log(data, 'datadata');
    if (data && data.eventMetaList) setList(concat(list, data.eventMetaList));
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

  const SubscribeToEvent = (lists, setLists) => {
    subscribeToMore({
      document: EVENT_META_CREATED,
      updateQuery: (previousResult, {subscriptionData, ...rest}) => {
        console.log(subscriptionData, 'subscriptionData');
        if (!subscriptionData.data) {
          return previousResult;
        }
        const {eventCreated} = subscriptionData.data;
        if (eventCreated.event) {
          setSubscription(eventCreated.event);
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
export default EventListQuery;
