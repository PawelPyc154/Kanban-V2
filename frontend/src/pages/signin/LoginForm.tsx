import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../../components/formFields/Button';
import Input from '../../components/formFields/Input';

export interface CompositionFormValues {
  email: string;
  password: string;
}

export interface LoginFormProps {}

const schema = yup.object().shape({
  email: yup.string().required('Email is required!').email('Invalid email!'),
  password: yup
    .string()
    .required('Password is required!')
    .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/, 'test'),
});

const LoginForm: React.FC<LoginFormProps> = () => {
  const { register, handleSubmit, errors } = useForm<CompositionFormValues>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const test = () => {
    // console.log(e);
  };

  return (
    <form onSubmit={handleSubmit(test)} className="flex flex-col space-y-2 p-4">
      <h1 className="text-white">Login</h1>
      <Input placeholder="Email" type="email" ref={register} name="email" errorMessage={errors.email?.message} />
      <div className="flex space-x-2">
        <Input
          placeholder="Password"
          type="password"
          ref={register}
          name="password"
          errorMessage={errors.password?.message}
        />

        <Button className="self-end" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
