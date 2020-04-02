/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Dashboard} from '@templates';
import {Activity, BlockSearch, TransactionSearch} from '@screens';

const DashboardPage = props => (
  <Dashboard>
    <Router primary={false} style={{height: '100%', width: '100%'}}>
      <Activity path="/" />
      <BlockSearch path="/search/blocks" />
      <TransactionSearch path="/search/transactions" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
