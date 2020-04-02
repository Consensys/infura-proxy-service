/**
 * @function Application
 * @version 0.0.1
 */

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/css/reset.css';
import './assets/css/App.css';
import './assets/css/Blueprint.css';

/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Dashboard, Authentication, Site, Reports} from '@routes';
import Providers from './providers';

/* --- Component --- */
export default () => (
  <Providers>
    <Router>
      <Site path="/*" />
      <Authentication path="/auth/*" />
      <Dashboard path="/insights/*" />
    </Router>
  </Providers>
);
