import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

export interface LoaderProps {
  className: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => <BiLoaderAlt className={`animate-spin  ${className}`} />;

export default Loader;
