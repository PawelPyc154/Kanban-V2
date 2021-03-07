import React from 'react';
import { useQuery } from 'react-query';
import Navigation from './components/navigation';
import Pages from './pages';
import axiosApi from './utils/axiosApi';

export interface AppProps {}

const getMe = () => axiosApi.get('/auth/me').then((res) => res.data.data);

const App: React.FC<AppProps> = () => {
  const { data } = useQuery('user', getMe, {
    retry: 1,
  });

  return (
    <>
      <Navigation email={data?.email} />
      {JSON.stringify(data)}
      <Pages />
    </>
  );
};
export default App;
