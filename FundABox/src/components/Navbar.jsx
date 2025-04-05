import logo from "../assets/logo.PNG"
const Navbar = () => {
    return(
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b ">
            <div className = "container px-4 mx-auto relative text-sm"> 
                <div className = "flex justify-center items-center">
                    <div className = "flex items-center flex-shrink-0">
                        <img className="h-20 w-20 mr-2" src={logo} alt="logo"/>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        <li>
                            <a href="Home" 
                             className="text-black hover:text-[#4F7942] transition colors duration 300">
                                
                            Home
                            </a>
                        </li>
                        <li>
                            <a href="Guide" 
                             className="text-black hover:text-[#4F7942] transition colors duration 300">
                                
                            Guide
                            </a>
                        </li>
                        <li>
                            <a href="Feed" 
                             className="text-black hover:text-[#4F7942] transition colors duration 300">
                                
                            Feed
                            </a>
                        </li>
                        <li>
                            <a href="Donate" 
                             className="text-black hover:text-[#4F7942] transition colors duration 300">
                                
                            Donate
                            </a>
                        </li>
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