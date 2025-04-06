import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import logo from "../assets/logo.png";
import { Menu, X } from 'lucide-react';

const Navbar = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logout = () => {
    signOut(auth)
      .then(() => {
        onLogout();
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Guide', path: '/guide' },
    { name: 'Feed', path: '/feed' },
    { name: 'Donate', path: '/donate' },
    { name: 'Map', path: '/map' },
  ];

  return (
    <nav className="bg-white shadow-lg w-full py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img className="h-20 w-auto" src={logo} alt="logo" />
            
          </Link>
        </div>

        
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="text-lg text-gray-700 hover:text-green-600 transition-all duration-300 font-medium"
            >
              {item.name}
            </Link>
          ))}
          <button 
            onClick={logout}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300"
          >
            Logout
          </button>
        </div>

        

      
        </div>

    </nav>
  );
};

export default Navbar;
