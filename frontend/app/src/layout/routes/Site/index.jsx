/* --- Global --- */
import React from 'react';
import {Router} from '@reach/router';

/* --- Local --- */
import {Site} from '@templates';

import {Home} from '@screens';
/* --- SiteRoutes : Route --- */
const SiteRoutes = () => (
  <Site>
    <Router primary={false} style={{height: '100%', width: '100%'}}>
      <Home path="/" />
    </Router>
  </Site>
);

export default SiteRoutes;
