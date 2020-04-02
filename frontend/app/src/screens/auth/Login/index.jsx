/**
 * @component LoginScreen
 * @description The login screen for authentication.
 * @param {*} props
 * @description
 */

/* --- Global --- */

/* --- Local --- */
import {FormAuthLogin} from '@forms';
import {SessionAnnonymous} from '@containers';
import {AccountBasic} from '@containers';
import {AuthLogout} from '@containers';

/* --- Screen : Component --- */
const Screen = props => {
  return (
    <>
      <Main />
    </>
  );
};

/* --- Main : Component --- */
const Main = props => {
  return (
    <Atom.Flex center column sx={styleMain}>
      <Atom.Box card sx={styleCard}>
        <SessionAnnonymous>
          <LoggedOut />
          <LoggedIn />
        </SessionAnnonymous>
      </Atom.Box>
    </Atom.Flex>
  );
};

const styleMain = {};

const styleCard = {
  width: ['100%', '100%', 560],
};

// @dev The refetch function is passed from the "SessionAnnonymous" container
const LoggedOut = ({refetch}) => {
  return (
    <>
      <Atom.Box sx={{textAlign: 'center'}}>
        <Atom.Heading as="h2" sx={{fontSize: [4, 4, 5]}}>
          Login
        </Atom.Heading>
      </Atom.Box>
      <FormAuthLogin refetch={refetch} />
    </>
  );
};

// @dev The refetch function is passed from the "SessionAnnonymous" container
const LoggedIn = ({refetch}) => {
  return (
    <Atom.Box>
      <Atom.Flex alignCenter between>
        <AccountBasic refetch={refetch} />
        <Atom.Span>
          <AuthLogout sm white />
        </Atom.Span>
      </Atom.Flex>
      <Atom.HorizontalRule sx={{my: 3}} />
      <Atom.Flex column>
        {/* Dasbboard : Button */}
        <Atom.Flex alignCenter>
          <Molecule.Link to="/insights">
            <Atom.Button sm green m1>
              Dashboard
            </Atom.Button>
          </Molecule.Link>
          <Atom.Span sm>Find the perfect candidate.</Atom.Span>
        </Atom.Flex>
        {/* Dasbboard : Button */}
        <Atom.Flex alignCenter>
          <Molecule.Link to="/reports">
            <Atom.Button sm green m1>
              Advanced Features
            </Atom.Button>
          </Molecule.Link>
          <Atom.Span sm>
            Request advanced features limited to early adopters.
          </Atom.Span>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Box>
  );
};

export default Screen;
