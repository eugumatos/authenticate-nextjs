import React from 'react';
import Users from '../containers/Users';

import withAuth from '../utils/withAuth';

const Home = () => {
  return (
  <>
    <Users/>
  </>
  )
}

export default withAuth(Home);

