import { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import { selectorAuth } from '../store/auth/authSlice';
import { useAppSelector } from '../store/hooks';
import { IRoutesProps } from '../utils/global/interfaces';
import Fallback from './Fallback';
import Redirect from './Redirect';
import { renderRoutes } from './renderRoutes';
import ScrollToTop from './ScrollToTop';

const LandingPage = lazy(() => {
  return import('../pages/LandingPage');
});

const LoginPage = lazy(() => {
  return import('../pages/LoginPage');
});

const routes: IRoutesProps[] = [
  {
    name: 'LandingPage',
    path: '/',
    Component: LandingPage,
    exact: true,
  },
];

const MainRouter: FC = () => {
  const { isLoggedIn } = useAppSelector(selectorAuth);
  return (
    <Router>
      <ScrollToTop>
        <Layout>
          <Redirect>
            <Suspense fallback={<Fallback />}>
              <Switch>
                <Route key="login" path="/login" component={LoginPage} />
                {/* <Route key="landing" exact path="/" component={LandingPage} /> */}
                {renderRoutes(routes, isLoggedIn)}
              </Switch>
            </Suspense>
          </Redirect>
        </Layout>
      </ScrollToTop>
    </Router>
  );
};

export default MainRouter;
