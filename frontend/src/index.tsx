import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AppProviders from './components/appProviders';
import './index.css';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      // onError: (e) => {
      // if ('message' in (e as Error)) {
      //   showErrorToast((e as Error).message);
      // }
      // },
    },

    queries: {
      retry: false,
      staleTime: 60 * 1000 * 5,
      // onError: (e) => {
      // if ('message' in (e as Error)) {
      //   showErrorToast((e as Error).message);
      // }
      // },
      // queryFn: defaultQueryFn,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProviders>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router>
          <App />
        </Router>
      </AppProviders>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
