import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import UserRoute from '../components/routeGuards/UserRoute';
import WithoutUserRoute from '../components/routeGuards/WithoutUserRoute';

const Signin = React.lazy(() => import('./signin'));
const Kanbans = React.lazy(() => import('./kanbans'));
const Kanban = React.lazy(() => import('./kanban'));

const Pages: React.FC = () => (
  <Suspense fallback={<div> Loader</div>}>
    <Switch>
      <Route path="/about" component={Signin} />
      <WithoutUserRoute path="/signin" component={Signin} />
      <UserRoute path="/kanbans" component={Kanbans} />
      <UserRoute path="/kanban/:id" component={Kanban} />
      <Redirect from="*" to="/kanbans" />
    </Switch>
  </Suspense>
);

export default Pages;
