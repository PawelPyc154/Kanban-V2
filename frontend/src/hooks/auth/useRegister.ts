import { AxiosResponse } from 'axios';
import { ErrorOption } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import ApiError from '../../models/ApiError';
import RegisterRequest from '../../models/RegisterRequest';
import axiosApi from '../../utils/axiosApi';
import setApiFieldsErrors from '../../utils/setApiFieldsErrors';

const useRegister = (setError: (name: 'email' | 'password', error: ErrorOption) => void) => {
  const queryClient = useQueryClient();
  const history = useHistory();
  return useMutation<AxiosResponse<{ email: string }>, ApiError<{ email: string; password: string }>, RegisterRequest>(
    (formValue) => axiosApi.post('/auth/register', formValue),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
        history.push('/kanban');
      },

      onError: (error) => {
        if (error.response) {
          setApiFieldsErrors(error.response.data.error, setError);
        }
      },
    },
  );
};

export default useRegister;
