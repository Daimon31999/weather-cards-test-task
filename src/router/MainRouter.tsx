import { Suspense, lazy, FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import Fallback from './Fallback';
import ScrollToTop from './ScrollToTop';

const LandingPage = lazy(() => {
  return import('../pages/LandingPage');
});

const LoginPage = lazy(() => {
  return import('../pages/LoginPage');
});

const MainRouter: FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <Layout>
          <Suspense fallback={<Fallback />}>
            <Switch>
              <Route key="landing" exact path="/" component={LandingPage} />
              <Route key="login" exact path="/login" component={LoginPage} />
            </Switch>
          </Suspense>
        </Layout>
      </ScrollToTop>
    </Router>
  );
};

export default MainRouter;
