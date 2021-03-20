import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Signin = React.lazy(() => import('./signin'));
const Kanbans = React.lazy(() => import('./kanbans'));
const Kanban = React.lazy(() => import('./kanban'));

export interface PagesProps {}

const Pages: React.FC<PagesProps> = () => (
  <Suspense fallback={<div> Loader</div>}>
    <Switch>
      <Route path="/about" component={Signin} />
      <Route path="/signin" component={Signin} />
      <Route path="/kanbans" component={Kanbans} />
      <Route path="/kanban/:id" component={Kanban} />
      <Redirect from="*" to="/kanbans" />
    </Switch>
  </Suspense>
);

export default Pages;
