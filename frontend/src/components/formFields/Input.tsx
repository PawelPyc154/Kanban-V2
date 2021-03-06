import React from 'react';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  errorMessage?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ errorMessage, id, ...props }, ref) => (
  <div className="w-full">
    <input
      id={id}
      {...props}
      ref={ref}
      className="w-full h-10 rounded-md bg-gray-700 p-2 text-white placeholder-gray-300"
    />
    {errorMessage && (
      <label htmlFor={id} className="text-red-600 text-xs block">
        {errorMessage}
      </label>
    )}
  </div>
));

export default Input;
