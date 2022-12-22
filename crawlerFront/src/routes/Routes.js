import React from 'react';
import { Route, Routes as Routings } from 'react-router-dom';
import { PublicRoutes } from './AppRoutes';
import BaseRoute from './BaseRoute';

export const Routes = () => {
  return (
    <>
      <Routings>
        <Route element={<BaseRoute />}>
          {PublicRoutes.map((r) => (
            <Route element={r.element} key={r.path} path={r.path} />
          ))}
        </Route>
      </Routings>
    </>
  );
};