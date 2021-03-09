import { useQuery } from 'react-query';
import axiosApi from '../../utils/axiosApi';

const getMe = () => axiosApi.get('/auth/me').then((res) => res.data.data);

const useMe = () =>
  useQuery('user', getMe, {
    retry: 1,
  });

export default useMe;
