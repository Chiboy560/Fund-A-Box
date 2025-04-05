import React from 'react'
import logo from "../assets/logo.PNG"
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="w-full flex justify-between items-center py-4 px-[8%]">
            <div className = "container px-4 mx-auto relative text-sm"> 
                <div className = "flex justify-center items-center">
                    <div className = "flex items-center flex-shrink-0">
                        <img className="h-20 w-20 mr-2" src={logo} alt="logo"/>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        <Link to='/'>
                        <li>
                            <a href="/" 
                             className="text-black hover:text-[#4F7942] transition colors duration 300">
                                
                            Home
                            </a>
                        </li>
                        </Link>
                        <Link to='/guide'>
                        <li>
                            <a href="Guide" 
                             className="text-black hover:text-[#4F7942] transition colors duration 300">
                                
                            Guide
                            </a>
                        </li>
                        </Link>
                        <Link to='/feed'>
                        <li>
                            <a href="Feed" 
                             className="text-black hover:text-[#4F7942] transition colors duration 300">
                                
                            Feed
                            </a>
                        </li>
                        </Link>
                        <Link to='/donate'>
                        <li>
                            <a href="Donate" 
                             className="text-black hover:text-[#4F7942] transition colors duration 300">
                                
                            Donate
                            </a>
                        </li>
                        </Link>
                        <li>
                            <a href="Login" 
                             className="text-black hover:text-[#4F7942] transition colors duration 300">
                                
                            Login
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
  };
  
  export default Navbar;