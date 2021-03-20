import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import ApiError from '../../models/ApiError';
import { BoardType } from '../../models/Board';
import axiosApi from '../../utils/axiosApi';

const useReorderColumn = () => {
  const queryClient = useQueryClient();

  return useMutation<
    AxiosResponse<BoardType>,
    ApiError<{}>,
    { boardId: string; fromIndex: number; toIndex: number; columnId: string }
  >((requestData) => axiosApi.put('/columns/reorder', requestData), {
    onMutate: async ({ boardId, fromIndex, toIndex, columnId }) => {
      const key = ['board', boardId];
      await queryClient.cancelQueries(key);

      const previousBoard = queryClient.getQueryData<BoardType>(key);

      // console.log(previousBoard);
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

      return { previousBoard };
    },
    // onSuccess: (res, variable) => {
    //   console.log('context;', res.data);

    //   const key = ['board', variable.boardId];
    //   queryClient.setQueryData<BoardType>(key, res.data);
    // },

    onError: (err, variables, context: any) => {
      if (context?.previousTodos) {
        queryClient.setQueryData<BoardType>('todos', context.previousTodos);
      }
    },

    onSettled: (data, variables, context) => {
      const key = ['board', context.boardId];
      console.log(' onSettled', data, variables, context);
      queryClient.invalidateQueries(key);
    },
  });
};
export default useReorderColumn;
