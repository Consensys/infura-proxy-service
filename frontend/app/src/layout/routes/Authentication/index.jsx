/* --- Global --- */
import React from 'react';
import {Router} from '@reach/router';

/* --- Local --- */
import {Canvas} from '@templates';

import {Login, Register, AuthProfile} from '@screens';
/* --- Component --- */
const IndexPage = () => (
  <Canvas>
    <Router primary={false} style={{height: '100%', width: '100%'}}>
      <Login path="/" />
      <Register path="/register" />
      <AuthProfile path="/account" />
    </Router>
  </Canvas>
);

export default IndexPage;
