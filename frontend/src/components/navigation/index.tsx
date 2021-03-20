import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link, useHistory } from 'react-router-dom';
import useMe from '../../hooks/auth/useMe';
import axiosApi from '../../utils/axiosApi';
import Button from '../formFields/Button';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const { data } = useMe();

  const history = useHistory();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation<{ email: string }, { error: string }>(
    () => axiosApi.post('/auth/logout', {}),
    {
      onSuccess: () => {
        queryClient.setQueryData(['user'], null);
        history.push('/signin');
      },
      // onError: (error, variables, context) => {
      // console.log(error, variables, context);
      // },
    },
  );

  return (
    <nav className="bg-gray-600 text-white h-10 px-5 flex items-center">
      <ul className="flex space-x-4 items-center ">
        <li>
          <Link to="/kanbans">Signin</Link>
        </li>

        {data?.email && <li>{data?.email}</li>}
        {data?.email && (
          <li>
            <Button isLoading={isLoading} onClick={() => mutate()}>
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
