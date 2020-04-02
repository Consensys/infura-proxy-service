/* --- Global --- */

/* --- Local --- */
import {FormTransactionRequest} from '@forms';
import {TransactionsTable} from '@containers';
import {TransactionsQuery} from '@query';
import {Table} from '@horizin/molecules';

/* --- Component --- */
const DashboardOverview = props => {
  return (
    <Atom.Box>
      <Showcase />
      <RegionMain />
    </Atom.Box>
  );
};

/* --- Showcase : Component --- */
const Showcase = props => {
  return (
    <Atom.Box gradient="gray" sx={styleShowcase}>
      <Atom.Container>
        <FormTransactionRequest sx={{display: 'flex'}} horizontal />
      </Atom.Container>
    </Atom.Box>
  );
};

const styleShowcase = {
  // bg: 'blue',
  boxShadow: 1,
  color: 'white',
  py: [4, 4, 5],
  width: '100%',
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
