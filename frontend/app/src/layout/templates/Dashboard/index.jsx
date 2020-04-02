/* --- Global --- */
import PerfectScrollbar from 'react-perfect-scrollbar';

/* --- Local --- */
import {RegionAside, RegionTopDashboard, RegionFooter} from '@regions';

/* --- DashboardTemplate :  Template : Component --- */
const DashboardTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <Atom.Flex column sx={{variant: 'regions.container'}}>
      <Atom.Flex sx={{height: '100%', flex: 1}}>
        <RegionAside variant="regions.aside" />
        <Atom.Flex column sx={{variant: 'regions.main'}}>
          <RegionTopDashboard />
          <Atom.Flex column sx={{height: '80%', flex: 1, ...sxMain}}>
            <PerfectScrollbar>{children}</PerfectScrollbar>
          </Atom.Flex>
          <RegionFooter />
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default DashboardTemplate;
