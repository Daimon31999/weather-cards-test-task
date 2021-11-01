import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IRoutesProps } from '../utils/global/interfaces';

export const renderRoutes = (routes: IRoutesProps[], isLoggedIn: boolean): React.ReactNode => {
  return routes.map(({ name, path, Component, exact }) => {
    return (
      <Route
        key={name}
        exact={exact}
        path={path}
        render={() => {
          return isLoggedIn ? <Component /> : <Redirect to="/login" />;
        }}
      />
    );
  });
};
