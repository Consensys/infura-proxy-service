/* --- Global --- */
import React from 'react';
import {Query} from 'react-apollo';
import {Component} from '@horizin/ui-compose';

/* --- Local --- */
import {GET_ME} from './queries';

const withSession = Render => props => (
  <Query query={GET_ME}>
    {({data, refetch}) => Component(Render, {...props, session: data, refetch})}
  </Query>
);

export default withSession;
