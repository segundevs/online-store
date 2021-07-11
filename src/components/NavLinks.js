import React from 'react';
import { Link } from 'react-router-dom';
import {TiShoppingCart} from 'react-icons/ti';

const NavLinks = ({isOpen, setIsOpen}) => {
  return (
    <div className={`items-center md:flex ${isOpen ? "block" : "hidden" }`}>
                    {/*Mobile Menu open: "block", Menu closed: "hidden"*/} 
      <div onClick={() => setIsOpen(prev => !prev)} className="flex flex-col md:flex-row md:mx-6">
          <Link to="/" className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">Home</Link>
          <Link to="/shop" className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">Shop</Link>
          <Link to="/contact" className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">Contact</Link>
          <Link to="/about" className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">About</Link>
      </div>
                          {/* Shopping cart icon */}
      <div className="flex justify-center md:block">
          <Link to="/cart" className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
            <TiShoppingCart className="w-5 h-5"/>
            <span className="absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full"></span>
          </Link>
      </div>
    </div>
  )
}

export default NavLinks
