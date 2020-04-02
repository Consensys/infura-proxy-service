/**
 * @name RegionTopDashboard
 * @description Default top region for application.
 */
/* --- Local --- */
import {ColorMode} from '@components';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.canvasheader'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Molecule.Link to="/">
        <Atom.Heading
          heavy
          as="h2"
          sx={{
            fontSize: [1, 1, 2],
            m: 0,
          }}>
          <Atom.Span normal sx={{color: 'white'}}>
            Infura
          </Atom.Span>{' '}
          <Atom.Span sx={{color: 'white'}}>Proxy Service</Atom.Span>
        </Atom.Heading>
      </Molecule.Link>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <Molecule.Link to="/insights">
        <Atom.Span>Dashboard</Atom.Span>
      </Molecule.Link>
      {/* <ColorMode /> */}
    </Atom.Flex>
  </Atom.Flex>
);
