import { QueryFunctionContext, useQuery } from 'react-query';
import ApiError from '../../models/ApiError';
import { BoardType } from '../../models/Board';
import axiosApi from '../../utils/axiosApi';

const getBoard = (params: QueryFunctionContext<['board', string]>) =>
  axiosApi.get(`/boards/${params.queryKey[1]}`).then((data) => data.data.data);

const useBoard = (id: string) =>
  useQuery<{ board: BoardType }, ApiError<{}>>(['board', id], getBoard, {
    retry: 1,
  });

export default useBoard;
