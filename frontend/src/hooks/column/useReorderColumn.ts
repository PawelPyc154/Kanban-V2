import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import ApiError from '../../models/ApiError';
import { BoardType } from '../../models/Board';
import axiosApi from '../../utils/axiosApi';

interface ReorderRequest {
  boardId: string;
  fromIndex: number;
  toIndex: number;
  columnId: string;
}

const useReorderColumn = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<BoardType>, ApiError<{}>, ReorderRequest, BoardType | undefined>(
    (requestData) => axiosApi.put('/columns/reorder', requestData),
    {
      onMutate: async ({ boardId, fromIndex, toIndex, columnId }) => {
        const key = ['board', boardId];
        await queryClient.cancelQueries(key);

        const previousBoard = queryClient.getQueryData<BoardType>(key);

        if (previousBoard) {
          const { columns } = previousBoard;
          const column = columns.find((item) => item._id === columnId);
          if (column) {
            columns.splice(fromIndex, 1);
            columns.splice(toIndex, 0, column);
            queryClient.setQueryData<BoardType>(key, {
              ...previousBoard,
              columns,
            });
          }
        }

        return previousBoard;
      },

      onError: (err, variables, previousBoard) => {
        const key = ['board', variables.boardId];
        if (previousBoard) {
          queryClient.setQueryData<BoardType>(key, previousBoard);
        }
      },
    },
  );
};
export default useReorderColumn;
