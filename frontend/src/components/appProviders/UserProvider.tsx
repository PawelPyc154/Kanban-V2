import React from 'react';
import { QueryObserverResult, useQuery } from 'react-query';
import ApiError from '../../models/ApiError';
import axiosApi from '../../utils/axiosApi';

export interface UserProviderProps {}

export const UserContext = React.createContext(
  {} as QueryObserverResult<
    {
      email: string;
    },
    ApiError<{}>
  >,
);

const getMe = () => axiosApi.get('/auth/me').then((res) => res.data.data);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const query = useQuery<{ email: string }, ApiError<{}>>('user', getMe, {
    retry: 1,
  });
  return <UserContext.Provider value={query}>{children}</UserContext.Provider>;
};

export default UserProvider;
