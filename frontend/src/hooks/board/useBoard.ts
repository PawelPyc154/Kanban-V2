import { useQuery } from 'react-query';
import ApiError from '../../models/ApiError';
import { BoardType } from '../../models/Board';
import axiosApi from '../../utils/axiosApi';

const useBoard = (id: string) =>
  useQuery<BoardType, ApiError<{}>>(
    ['board', id],
    (params) => axiosApi.get(`/boards/${params.queryKey[1]}`).then((res) => res.data),
    {
      retry: 1,
    },
  );

export default useBoard;
