import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserRoute from '../components/routeGuards/UserRoute';
import WithoutUserRoute from '../components/routeGuards/WithoutUserRoute';

const Signin = React.lazy(() => import('./signin'));
const Kanbans = React.lazy(() => import('./kanbans'));

export interface PagesProps {}

const Pages: React.FC<PagesProps> = () => (
  <Suspense fallback={<div> Loader</div>}>
    <Switch>
      <Route path="/home" component={Signin} />
      <Route path="/about" component={Signin} />
      <WithoutUserRoute path="/signin" component={Signin} />
      <UserRoute path="/test" component={Kanbans} />
      <UserRoute path="/test2" component={Kanbans} />
    </Switch>
  </Suspense>
);

export default Pages;
