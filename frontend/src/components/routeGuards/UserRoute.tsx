import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useMe from '../../hooks/auth/useMe';

export interface UserRouteProps {
  path: string;
  component: React.LazyExoticComponent<React.FC<any>>;
}

const UserRoute: React.FC<UserRouteProps> = ({ component: Component, ...rest }) => {
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

export default UserRoute;
