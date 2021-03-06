import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useMe from '../../hooks/auth/useMe';

export interface WithoutUserRouteProps {
  path: string;
  component: React.LazyExoticComponent<React.FC<any>>;
}

const WithoutUserRoute: React.FC<WithoutUserRouteProps> = ({ component: Component, ...rest }) => {
  const { data } = useMe();
  return (
    <Route
      {...rest}
      render={(props) =>
        !data ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default WithoutUserRoute;
