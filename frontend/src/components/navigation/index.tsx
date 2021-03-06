import React from 'react';
import { Link } from 'react-router-dom';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => (
  <nav className="bg-gray-600 text-white h-10 px-5 flex items-center">
    <ul className="flex space-x-4 items-center ">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signin">Signin</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
