import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useMe from '../hooks/auth/useMe';

export interface PrivateRouteProps {
  path: string;
  component: React.LazyExoticComponent<React.FC<any>>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { data } = useMe();
  return (
    <Route
      {...rest}
      render={(props) =>
        data ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
