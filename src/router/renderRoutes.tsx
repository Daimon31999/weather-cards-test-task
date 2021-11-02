import { ReactNode } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { messages } from '../utils';
import { IRoutesProps } from '../utils/global/interfaces';

export const renderRoutes = (routes: IRoutesProps[], isLoggedIn: boolean): ReactNode => {
  const { loginRoute } = messages.routes;

  return routes.map(({ name, path, Component, exact }) => {
    return (
      <Route
        key={name}
        exact={exact}
        path={path}
        render={() => {
          return isLoggedIn ? <Component /> : <Redirect to={loginRoute} />;
        }}
      />
    );
  });
};
