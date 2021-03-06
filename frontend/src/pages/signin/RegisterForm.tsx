import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../../components/formFields/Button';
import Input from '../../components/formFields/Input';
import { email, password, passwordConfirm } from '../../utils/validation';

export interface CompositionFormValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface RegisterFormProps {}

const schema = yup.object().shape({
  email,
  password,
  passwordConfirm,
});

const RegisterForm: React.FC<RegisterFormProps> = () => {
  const { register, handleSubmit, errors } = useForm<CompositionFormValues>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const handleRegister = () => {
    // console.log(e);
  };
  // @refresh reset
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
          name="passwordConfirm "
          errorMessage={errors.passwordConfirm?.message}
        />
        <Button type="submit" isLoading>
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
