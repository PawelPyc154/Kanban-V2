import React from 'react';
import Button from '../../components/formFields/Button';
import Input from '../../components/formFields/Input';

export interface LoginEmailFormProps {}

const LoginEmailForm: React.FC<LoginEmailFormProps> = () => (
  <form action="" className="flex flex-col space-y-2 p-4">
    <h1 className="text-white">Login only with email</h1>
    <div className="flex space-x-2">
      <Input placeholder="Email" className="flex-grow" />
      <Button className="self-end">Login</Button>
    </div>
  </form>
);

export default LoginEmailForm;
