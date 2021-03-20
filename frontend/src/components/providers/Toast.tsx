import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const contextClass = {
  success: 'bg-green-400',
  error: 'bg-red-600',
  info: 'bg-blue-500',
  warning: 'bg-yellow-400',
  default: 'bg-indigo-600',
  dark: 'bg-gray-600 text-gray-300',
};

const Toast: React.FC = ({ children }) => (
  <>
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      closeButton={false}
      toastClassName={(props) =>
        `${
          contextClass[props?.type || 'default']
        } relative flex p-1 min-h-8 rounded-md justify-between overflow-hidden cursor-pointer mb-2`
      }
      bodyClassName={() => 'text-sm font-white font-med block p-2'}
    />
    {children}
  </>
);

export default Toast;
