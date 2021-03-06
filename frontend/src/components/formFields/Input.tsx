import React from 'react';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input {...props} ref={ref} className="w-full  h-10 rounded-md bg-gray-700 p-2 text-white placeholder-gray-300" />
));

export default Input;

// const InputStyled = styled.input`
//   font-size: ${({ theme }) => theme.font.size3};
//   height: ${({ theme }) => theme.size.size8};
//   background-color: ${({ theme }) => theme.colors.borderPrimary};
//   border: none;
//   color: inherit;
//   border-radius: ${({ theme }) => theme.size.size1};
//   padding: 0 ${({ theme }) => theme.size.size2};
//   flex-grow: 4;
//   min-width: 0;
//   ${({ theme }) => theme.media.desktop} {
//     height: ${({ theme }) => theme.size.size10};
//   }
//   &::placeholder {
//     color: inherit;
//   }
// `;
