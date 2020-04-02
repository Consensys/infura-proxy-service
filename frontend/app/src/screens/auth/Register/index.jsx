/**
 * @component LoginScreen
 * @description The login screen for authentication.
 * @param {*} props
 * @description
 */

/* --- Global --- */

/* --- Local --- */
import {FormAuthRegister} from '@forms';

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
        <Atom.Box sx={{textAlign: 'center'}}>
          <Atom.Heading as="h2" sx={{fontSize: [4, 4, 5]}}>
            Registration
          </Atom.Heading>
          <Atom.Heading sx={{fontWeight: 500}}>
            Unlock the power of the Ethereum Community
          </Atom.Heading>
        </Atom.Box>
        <FormAuthRegister />
      </Atom.Box>
    </Atom.Flex>
  );
};

const styleMain = {};

const styleCard = {
  width: ['100%', '100%', 560],
};

export default Screen;
