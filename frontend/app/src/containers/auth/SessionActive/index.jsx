/* --- Global --- */
import React from 'react';
import {Query} from 'react-apollo';
import {Component} from '@horizin/ui-compose';

/* --- Local --- */
import {GET_ME} from '@queries';

const WithSession = ({children, ...props}) => (
  <Query query={GET_ME}>
    {({data, refetch}) => {
      return data.me ? (
        Component(children, {...props})
      ) : (
        <Atom.Span>Not Logged In</Atom.Span>
      );
    }}
  </Query>
);

export default WithSession;
