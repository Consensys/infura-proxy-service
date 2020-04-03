/* --- Global --- */
import {Icon} from '@blueprintjs/core';

/* --- Local --- */
import {TransactionQuery} from '@containers';
import {BlockTable} from '@containers';
import {BlocksQuery} from '@query';
/* --- Component --- */
const DashboardOverview = props => {
  return (
    <Atom.Box>
      <RegionMain />
    </Atom.Box>
  );
};

const RegionMain = props => {
  return (
    <Atom.Box sx={{m: 4}}>
      <BlocksQuery>
        <BlockTable />
      </BlocksQuery>
    </Atom.Box>
  );
};

export default DashboardOverview;
