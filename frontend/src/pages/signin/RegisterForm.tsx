import React from 'react';
import Button from '../../components/formFields/Button';
import Input from '../../components/formFields/Input';

export interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = () => (
  <form action="" className="flex flex-col space-y-2 p-4">
    <h1 className="text-white">Register</h1>
    <Input placeholder="Email" type="email" />
    <Input placeholder="Password" type="password" />
    <div className="flex space-x-2">
      <Input placeholder="Confirm password" type="password" />
      <Button className="self-end" isLoading>
        Register
      </Button>
    </div>
  </form>
);

export default RegisterForm;
