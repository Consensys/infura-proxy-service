/* --- Global --- */
import PerfectScrollbar from 'react-perfect-scrollbar';
/* --- Local --- */
import MenuAside from './menus';

/* --- Component --- */
const RegionAside = ({sx, ...props}) => {
  return (
    <Atom.Flex
      column
      gradient="orange"
      direction={180}
      sx={{variant: 'regions.aside'}}>
      {/* Branding : Area : Aside  */}
      <Atom.Flex center column between gradient="trans" sx={{p: 4}}>
        <Molecule.Link to="/">
          <Atom.Heading lg heavy sx={{mb: 0}}>
            {GLOBAL.siteName}
          </Atom.Heading>
        </Molecule.Link>
      </Atom.Flex>
      {/* Center : Aside */}
      <Atom.Box sx={{flex: 6}}>
        <PerfectScrollbar>
          {/* Menu : Area  */}
          <Atom.Box sx={{px: 4, py: 3}}>
            <MenuAside />
          </Atom.Box>
        </PerfectScrollbar>
      </Atom.Box>

      {/* Bottom : Aside */}
      <Atom.Flex sx={{flex: 1, justifySelf: 'flex-end'}}>
        <Atom.Flex
          sx={{
            alignItems: 'flex-end',
            flex: 1,
            pb: 3,
            px: 3,
          }}>
          <Atom.Span sm m1>
            Community
          </Atom.Span>
          <Molecule.Link to="/documentation">
            <Atom.Span sm m1>
              Support
            </Atom.Span>
          </Molecule.Link>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default RegionAside;
