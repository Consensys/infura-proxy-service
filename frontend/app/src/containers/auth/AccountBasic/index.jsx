import React from 'react';
import withSession from '../Session/withSession.js';
import {AuthLogout} from '@containers';

/* ---AccountBasic : Component --- */
const AccountBasic = ({session, ...props}) => {
  return session && session.me ? (
    <Account account={session.me} />
  ) : (
    <Unavailable />
  );
};

const Account = ({account, ...props}) => {
  return (
    <Atom.Box alignCenter sx={{}}>
      <Atom.Span block sx={{fontSize: [3, 3, 4]}}>
        {account.username}
      </Atom.Span>
      <Atom.Span block sx={{ml: 0}}>
        {account.email}
      </Atom.Span>
      <Atom.Span block sx={{fontSize: [0, 0, 1], mt: 2}}>
        <strong>Account Type:</strong> {account.role}
      </Atom.Span>
    </Atom.Box>
  );
};

const Unavailable = props => {
  return (
    <Atom.Flex between>
      <Molecule.Link to="/auth">
        <Atom.Button>Login</Atom.Button>
      </Molecule.Link>
    </Atom.Flex>
  );
};

export default withSession(AccountBasic);
