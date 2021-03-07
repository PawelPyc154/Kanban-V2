import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export interface SigninProps {}

const Signin: React.FC<SigninProps> = () => (
  <main className="height-page bg-green-600 flex items-center">
    <div className="max-w-sm mx-auto w-full bg-gray-600 rounded-sm flex flex-col divide-y">
      {/* <LoginEmailForm /> */}
      <LoginForm />
      <RegisterForm />
    </div>
  </main>
);

export default Signin;
