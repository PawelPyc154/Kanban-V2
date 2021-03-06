import React from 'react';

export interface SigninProps {}

const Signin: React.FC<SigninProps> = () => (
  <main className="height-page bg-green-600 flex items-center">
    <div className="max-w-md mx-auto w-full bg-gray-600 rounded-lg">Signin</div>
  </main>
);

export default Signin;
