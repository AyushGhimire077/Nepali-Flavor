import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MainContext } from '../context/MainProvider';
import { toast } from 'react-toastify';


function Navbar() {

  // Get the active page
  const location = useLocation();
  const activePage = location.pathname;

  //Naviagte
  const nav = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedin, checkUserLogged, handleUserLogout } = useContext(MainContext);
  
  useEffect(() => {
    checkUserLogged();
  }, []);

  const handleClick = () => {
    setTimeout(() => {
      toggleMenu();
    }, 500);
    if (!isLoggedin) {
      toast.error("Please login first");
    } else {
      setTimeout(() => {
      toggleMenu();
      nav('/add-receipes');
      }, 400);
    }
  }

  //Hnalde Logout
  const handleLogoutClick = () => {
    if (isLoggedin) {
      handleUserLogout();
      toggleMenu();

    } else {
      toggleMenu();
   }
  }
  

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className=" h-[100px] sm:h-[140px] max-w-full w-[87%] mx-auto flex items-center justify-between py-10 ">

        {/* Navbar Links for desktop */}
      <ul className="hidden sm:flex gap-[34px] text-[#ccc] text-[20px] items-center ">
        <li className='p-[14px]'><Link to="/" className={`hover:text-gray-300 duration-300`}><FaBars className='text-2xl' /></Link></li>
        <li className='p-[14px]'><Link to="/" className={`${activePage === '/' ? 'text-[#FFB703]' : ''} ${activePage !== '/' ? 'hover:text-[#526D82]' : ''} duration-300`}>Home</Link></li>
          <li className='p-[14px]'><Link to="/receipes" className={`${activePage === '/receipes' ? 'text-[#FFB703]' : ''} ${activePage !== '/receipes' ? 'hover:text-[#526D82]' : ''} duration-300`}>Recipes</Link></li>
          <li className='p-[14px]'><Link to="/about" className={`${activePage === '/about' ? 'text-[#FFB703]' : ''} ${activePage !== '/about' ? 'hover:text-[#526D82]' : ''} duration-300`}>About</Link></li>
          <li className='p-[14px]'><Link to="/contact" className={`${activePage === '/contact' ? 'text-[#FFB703]' : ''} ${activePage !== '/contact' ? 'hover:text-[#526D82]' : ''} duration-300`}>Contact</Link></li>
      </ul>

        {/* Buttons for Add Recipe and Sign Up */}
        <div className="hidden sm:flex space-x-4 ">
          <button className="custom-btn"onClick={handleClick} >
            Add Recipe
          </button>
          <button onClick={handleLogoutClick} className="custom-btn">
            <Link to="/auth">{isLoggedin ? 'Logout' : 'Sign Up'}</Link>
          </button>
        </div>
        
        
      <div className="text-white font-semibold w-full px-5 flex justify-between flex-row-reverse z-40 text-3xl relative md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

          <div onClick={()=> nav('/')}>
            <h3 className='text-3xl' >NF-Dish</h3>
          </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col items-center py-28 gap-10 fixed top-0 z-30 right-0 h-full w-[50%] text-[#ccc] text-base bg-[#1a1a1a] rounded-b-xl">
          <Link to="/" onClick={toggleMenu} className={`${activePage === '/' ? 'text-[#FFB703]' : 'hover:text-[#526D82]'} duration-300`}>Home</Link>
          <Link to="/receipes" onClick={toggleMenu} className={`${activePage === '/receipes' ? 'text-[#FFB703]' : 'hover:text-[#526D82]'} duration-300`}>Recipes</Link>
          <Link to="/about" onClick={toggleMenu} className={`${activePage === '/about' ? 'text-[#FFB703]' : 'hover:text-[#526D82]'} duration-300`}>About</Link>
          <Link to="/contact" onClick={toggleMenu} className={`${activePage === '/contact' ? 'text-[#FFB703]' : 'hover:text-[#526D82]'} duration-300`}>Contact</Link>
          <p onClick={handleClick} className="custom-btn w-full text-center">Add Recipe</p>
         <Link to="/auth" onClick={handleLogoutClick} className="custom-btn w-full text-center">{isLoggedin ? "Logout" : "Sign Up"}</Link>
        </div>
      )}

      </div>
  );
}

export default Navbar;
