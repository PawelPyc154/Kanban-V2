import React from 'react';
import Button from '../../components/formFields/Button';
import Input from '../../components/formFields/Input';

export interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => (
  <form action="" className="flex flex-col space-y-2 p-4">
    <h1 className="text-white">Login</h1>
    <Input placeholder="Email" />
    <div className="flex space-x-2">
      <Input placeholder="Password" />
      <Button className="self-end">Login</Button>
    </div>
  </form>
);

export default LoginForm;
