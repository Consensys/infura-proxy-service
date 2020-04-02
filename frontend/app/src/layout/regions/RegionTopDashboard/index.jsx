/**
 * @name RegionTopDashboard
 * @description Default top region for application.
 */
/* --- Local --- */
import {ColorMode} from '@components';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter></Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <Atom.Flex></Atom.Flex>
      <ColorMode />
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
