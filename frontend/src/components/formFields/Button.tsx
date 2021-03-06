import React from 'react';
import Loader from '../Loader';

// export interface ButtonProps {
//   className?: string;
// }
type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, className, type = 'button', isLoading, ...props }) => (
  <button
    type={type}
    {...props}
    className={`bg-gray-700 h-10 px-3 space-x-2 text-white flex items-center relative rounded-md ${className}`}
  >
    {isLoading && <Loader className="" />}
    <div>{children}</div>
  </button>
);

export default Button;
