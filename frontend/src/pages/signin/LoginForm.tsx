import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import * as yup from 'yup';
import Button from '../../components/formFields/Button';
import Input from '../../components/formFields/Input';
import axiosApi from '../../utils/axiosApi';
import { email, password } from '../../utils/validation';

export interface FormValue {
  email: string;
  password: string;
}

export interface LoginFormProps {}

const schema = yup.object().shape({
  email,
  password,
});

const LoginForm: React.FC<LoginFormProps> = () => {
  const { register, handleSubmit, errors } = useForm<FormValue>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'pawelpyc154@gmail.com',
      password: 'Test1234$',
    },
  });
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation<{ email: string }, { error: string }, FormValue>(
    (formValue) => axiosApi.post('/auth/login', formValue),
    {
      onMutate: (variables) => {
        queryClient.invalidateQueries('user');
        console.log(variables);
      },
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries('user');
        console.log(data, variables, context);
      },
      onError: (error, variables, context) => {
        console.log(error, variables, context);
      },
    },
  );

  const handleLogin = (value: FormValue) => {
    // console.log('test');
    mutate(value);
  };
  return (
    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col space-y-2 p-4">
      <h1 className="text-white">Login</h1>
      <Input placeholder="Email" type="email" ref={register} name="email" errorMessage={errors.email?.message} />
      <div className="flex space-x-2 ">
        <Input
          placeholder="Password"
          type="password"
          ref={register}
          name="password"
          errorMessage={errors.password?.message}
        />

        <Button type="submit" isLoading={isLoading}>
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
