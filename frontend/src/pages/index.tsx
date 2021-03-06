import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signin from './signin';

export interface PagesProps {}

const Pages: React.FC<PagesProps> = () => (
  <Switch>
    <Route path="/home" component={Signin} />
    <Route path="/about" component={Signin} />
    <Route path="/signin" component={Signin} />
  </Switch>
);

export default Pages;
