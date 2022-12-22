import React from 'react';
import { Outlet } from 'react-router-dom/dist';
import Layout from '../layout/Layout';

const BaseRoute = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default BaseRoute;