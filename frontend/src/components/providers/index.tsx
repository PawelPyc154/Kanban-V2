import React from 'react';
import Toast from './Toast';
import UserProvider from './UserProvider';

const AppProviders: React.FC = ({ children }) => (
  <UserProvider>
    <Toast>{children}</Toast>
  </UserProvider>
);

export default AppProviders;
