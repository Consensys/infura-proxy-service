/* --- Global --- */
import React from 'react';
import {Query} from 'react-apollo';

/* --- Local --- */
import {GET_ME} from '@queries';

const withAuthorization = conditionFn => Component => props => (
  <Query query={GET_ME}>
    {({data, networkStatus, ...rest}) => {
      if (networkStatus < 7) {
        return null;
      }
      return conditionFn(data) ? <Component {...props} /> : null;
    }}
  </Query>
);

export default withAuthorization;
