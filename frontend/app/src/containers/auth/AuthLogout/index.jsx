import React from 'react';
import {redirectTo} from '@reach/router';
import {ApolloConsumer} from 'react-apollo';

const SignOutButton = ({sx, ...props}) => (
  <ApolloConsumer>
    {client => (
      <Atom.Button
        sm
        sx={sx}
        type="button"
        {...props}
        onClick={() => signOut(client)}>
        Logout
      </Atom.Button>
    )}
  </ApolloConsumer>
);

const signOut = client => {
  localStorage.removeItem('token');
  client.resetStore();
  try {
    redirectTo('/auth');
  } catch (error) {
    console.log(error);
  }
};

export {signOut};

export default SignOutButton;
