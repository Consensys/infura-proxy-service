/**
 * @component AuthProfileScreen
 * @param {*} props
 * @description
 */

/* --- Global --- */

/* --- Local --- */
import {AccountBasic} from '@containers';

/* --- AuthProfileScreen : Component --- */
const AuthProfileScreen = props => {
  return (
    <Atom.Box>
      <Main />
    </Atom.Box>
  );
};

/* --- Main : Component --- */
const Main = props => {
  return (
    <Atom.Flex center column sx={styleMain}>
      <Atom.Box card sx={styleCard}>
        <AccountBasic />
        {/* <FormAuthUpdate /> */}
      </Atom.Box>
    </Atom.Flex>
  );
};

const styleMain = {};

const styleCard = {
  width: ['100%', '100%', 560],
};

export default AuthProfileScreen;
