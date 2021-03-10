import React from 'react';
import UserProvider from './UserProvider';

export interface AppProvidersProps {}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => <UserProvider>{children}</UserProvider>;

export default AppProviders;
