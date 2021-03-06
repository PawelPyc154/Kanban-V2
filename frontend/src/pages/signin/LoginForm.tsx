import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../../components/formFields/Button';
import Input from '../../components/formFields/Input';
import { email, password } from '../../utils/validation';

export interface CompositionFormValues {
  email: string;
  password: string;
}

export interface LoginFormProps {}

const schema = yup.object().shape({
  email,
  password,
});

const LoginForm: React.FC<LoginFormProps> = () => {
  const { register, handleSubmit, errors } = useForm<CompositionFormValues>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const handleLogin = () => {
    // console.log(e);
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

        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
