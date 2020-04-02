/* --- Global --- */
import PerfectScrollbar from 'react-perfect-scrollbar';
/* --- Local --- */
import MenuAside from './menus';

/* --- Component --- */
const RegionAside = ({sx, ...props}) => {
  return (
    <Atom.Flex
      between
      column
      gradient="leather"
      direction={180}
      sx={{variant: 'regions.aside'}}>
      {/* Branding : Area  */}
      <Atom.Flex center column gradient="charcoal" sx={{height: '10%', p: 4}}>
        <Molecule.Link to="/">
          <Atom.Heading lg heavy sx={{mb: 0}}>
            {GLOBAL.siteName}
          </Atom.Heading>
        </Molecule.Link>
      </Atom.Flex>
      <Atom.Box sx={{height: '65%'}}>
        <PerfectScrollbar>
          {/* Menu : Area  */}
          <Atom.Box sx={{px: 4, py: 3}}>
            <MenuAside />
          </Atom.Box>
          <Atom.Box sx={{p: 3}}>
            <Molecule.Link to="/guide">
              <Atom.Button white sm sx={{mt: 3, width: '100%'}}>
                How It Works
              </Atom.Button>
            </Molecule.Link>
          </Atom.Box>
        </PerfectScrollbar>
      </Atom.Box>
      <Atom.Flex
        gradient="leather"
        sx={{justifySelf: 'flex-end', height: '15%'}}>
        <Atom.Box>
          <Atom.Flex sx={{justifyContent: 'flex-end', flex: 1, pb: 3, px: 3}}>
            <Atom.Span sm m1>
              Community
            </Atom.Span>
            <Molecule.Link to="/documentation">
              <Atom.Span sm m1>
                Support
              </Atom.Span>
            </Molecule.Link>
          </Atom.Flex>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default RegionAside;
