import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import Button from '../../components/formFields/Button';
import Input from '../../components/formFields/Input';
import axiosApi from '../../utils/axiosApi';
import { email, password } from '../../utils/validation';

interface FormValue {
  email: string;
  password: string;
  passwordConfirm: string;
}

interface RegisterFormProps {}

const schema = yup.object().shape({
  email,
  password,
});

const RegisterForm: React.FC<RegisterFormProps> = () => {
  const { register, handleSubmit, errors } = useForm<FormValue>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'pawelpyc154@gmail.com',
      password: 'Test1234$',
      passwordConfirm: 'Test1234$',
    },
  });

  // const { isLoading, data } = useQuery('repoData', () => {
  //   axiosApi.post('/auth/register', { email });
  // });
  const { mutate, data, isSuccess, isLoading } = useMutation<{ email: string }, { error: string }, FormValue>(
    (formValue) => axiosApi.post('/auth/register', formValue),
  );

  const handleRegister = (value: FormValue) => {
    // console.log('test');
    mutate(value);
  };

  // @refresh reset
  useEffect(() => {
    // console.log(data);
  }, [data]);
  return (
    <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col space-y-2 p-4">
      <h1 className="text-white">Register</h1>
      <Input placeholder="Email" type="email" ref={register} name="email" errorMessage={errors.email?.message} />
      <Input
        placeholder="Password"
        type="password"
        ref={register}
        name="password"
        errorMessage={errors.password?.message}
      />
      <div className="flex space-x-2">
        <Input
          placeholder="Confirm password"
          type="password"
          ref={register}
          name="passwordConfirm"
          errorMessage={errors.passwordConfirm?.message}
        />
        <Button type="submit" isLoading={isLoading}>
          Register
        </Button>
      </div>
      {isSuccess && 'isSuccess'}
    </form>
  );
};

export default RegisterForm;
