import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import axiosApi from '../../utils/axiosApi';
import Button from '../formFields/Button';

export interface NavigationProps {
  email?: string;
}

const Navigation: React.FC<NavigationProps> = ({ email }) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation<{ email: string }, { error: string }>(
    () => axiosApi.post('/auth/logout', {}),
    {
      onMutate: (variables) => {
        console.log(variables);
      },
      onSuccess: (data, variables, context) => {
        queryClient.setQueryData(['user'], null);
        console.log(data, variables, context);
      },
      onError: (error, variables, context) => {
        console.log(error, variables, context);
      },
    },
  );

  return (
    <nav className="bg-gray-600 text-white h-10 px-5 flex items-center">
      <ul className="flex space-x-4 items-center ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
        {email && <li>{email}</li>}
        {email && (
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
