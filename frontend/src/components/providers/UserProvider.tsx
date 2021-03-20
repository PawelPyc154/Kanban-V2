import React from 'react';
import { QueryObserverResult, useQuery } from 'react-query';
import ApiError from '../../models/ApiError';
import axiosApi from '../../utils/axiosApi';

export const UserContext = React.createContext(
  {} as QueryObserverResult<
    {
      email: string;
    },
    ApiError<{}>
  >,
);

const getMe = () => axiosApi.get('/auth/me').then((res) => res.data);

const UserProvider: React.FC = ({ children }) => {
  const query = useQuery<{ email: string }, ApiError<{}>>('user', getMe, {
    retry: 1,
    onError: () => {
      axiosApi.get('/auth/logout');
    },
  });
  return <UserContext.Provider value={query}>{children}</UserContext.Provider>;
};

export default UserProvider;
