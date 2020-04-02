/* --- Global --- */
import React from 'react';
import {Query} from 'react-apollo';
import {Component} from '@horizin/ui-compose';

/* --- Local --- */
import {GET_ME} from '@queries';

const SessionAnnonymous = ({children, ...props}) => (
  <Query query={GET_ME}>
    {({data, refetch}) => {
      return !data.me
        ? Component(children[0], {refetch, winning: true, ...props})
        : Component(children[1], {refetch, winning: true, ...props});
    }}
  </Query>
);

export default SessionAnnonymous;
