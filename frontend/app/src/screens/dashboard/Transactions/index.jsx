/* --- Global --- */

/* --- Local --- */
import {TransactionQuery} from '@containers';

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
      <TransactionQuery hash="0xb719420090cd4ae6ca4976e57461e09668c9a6e1acedc351f20f1edbb8f42f10" />
    </Atom.Box>
  );
};

export default DashboardOverview;
