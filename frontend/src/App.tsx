import React from 'react';
import Navigation from './components/navigation';
import Pages from './pages';

export interface AppProps {}

const App: React.FC<AppProps> = () => (
  <>
    <Navigation />

    <Pages />
  </>
);
export default App;
