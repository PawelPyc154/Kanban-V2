import { useQuery } from 'react-query';
import AllBoardResponse from '../../models/AllBoardResponse';
import ApiError from '../../models/ApiError';
import axiosApi from '../../utils/axiosApi';

const getBoards = () => axiosApi.get('/boards/all').then((res) => res.data);

const useBoards = () =>
  useQuery<AllBoardResponse, ApiError<{}>>(['boards'], getBoards, {
    retry: 1,
  });

export default useBoards;
