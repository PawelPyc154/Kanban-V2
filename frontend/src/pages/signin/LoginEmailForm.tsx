import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../../components/formFields/Button';
import Input from '../../components/formFields/Input';
import { email } from '../../utils/validation';

export interface CompositionFormValues {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email,
});
const LoginEmailForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<CompositionFormValues>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const handleLogin = () => {
    // console.log(e);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col space-y-2 p-4">
      <h1 className="text-white">Login only with email</h1>
      <div className="flex space-x-2">
        <Input placeholder="Email" type="email" ref={register} name="email" errorMessage={errors.email?.message} />
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default LoginEmailForm;
