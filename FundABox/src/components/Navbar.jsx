import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth'; // Import Firebase signOut function
import { auth } from '../config/firebase';
import logo from "../assets/logo.png";

const Navbar = ({ onLogout }) => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        onLogout(); // Trigger the logout state change
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <nav className="w-full flex justify-between items-center py-4 px-[8%]">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-center items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-20 mr-2" src={logo} alt="logo" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <Link to='/'>
              <li className='hover:text-green-700'>Home</li>
            </Link>
            <Link to='/guide'>
              <li className='hover:text-green-700'>Guide</li>
            </Link>
            <Link to='/feed'>
              <li className='hover:text-green-700'>Feed</li>
            </Link>
            <Link to='/donate'>
              <li className='hover:text-green-700'>Donate</li>
            </Link>
            <Link to='/map'>
              <li className='hover:text-green-700'>Map</li>
            </Link>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
