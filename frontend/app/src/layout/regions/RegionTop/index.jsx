/**
 * @name RegionTopDashboard
 * @description Default top region for application.
 */
/* --- Local --- */
import {ColorMode} from '@components';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Molecule.Link to="/">
        <Atom.Flex alignCenter>
          <Atom.Image
            sx={{
              mr: 2,
              width: 28,
            }}
            src="https://s3.amazonaws.com/infura-blog-content/2020/01/infura_logo_black.png"
          />
          <Atom.Heading
            heavy
            as="h2"
            sx={{
              fontSize: [1, 1, 2],
              m: 0,
            }}>
            <Atom.Span normal sx={{color: 'charcoal'}}>
              Infura
            </Atom.Span>
            <Atom.Span sx={{color: 'orange'}}>Proxy Service</Atom.Span>
          </Atom.Heading>
        </Atom.Flex>
      </Molecule.Link>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <Molecule.Link to="/insights/" sx={{mr: 2}}>
        <Atom.Span sm>Dashboard</Atom.Span>
      </Molecule.Link>
      <Molecule.Link to="/auth/">
        <Atom.Span tag sm>
          Login
        </Atom.Span>
      </Molecule.Link>
      {/* <ColorMode /> */}
    </Atom.Flex>
  </Atom.Flex>
);

const MenuItemIcon = ({label, image, to}) => {
  return (
    <Molecule.Link to={to} sx={{mx: 2}}>
      <Atom.Flex>
        <Atom.Image src={image} sx={{width: 22}} />
        <Atom.Span m1>{label}</Atom.Span>
      </Atom.Flex>
    </Molecule.Link>
  );
};
