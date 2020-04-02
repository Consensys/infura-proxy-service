/* --- Global --- */

/* --- Local --- */
import {TransactionsTable} from '@containers';
import {TransactionsQuery} from '@query';
import {Table} from '@horizin/molecules';

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
    <Atom.Box sx={{m: 4, overflowX: 'auto'}}>
      <TransactionsQuery>
        <TransactionsTable />
      </TransactionsQuery>
    </Atom.Box>
  );
};

export default DashboardOverview;
