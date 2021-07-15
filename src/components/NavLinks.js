import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {TiShoppingCart} from 'react-icons/ti';
import {BsMoon} from 'react-icons/bs';
import {HiLightBulb} from 'react-icons/hi';
import { CartContext } from '../contexts/cartContext/CartContext';
import useDarkMode from '../hooks/useDarkMode';

const NavLinks = ({isOpen, setIsOpen}) => {
  const [ colorTheme, setTheme] = useDarkMode();
  const { cartItem} = useContext(CartContext);

  return (
    <div onClick={() => setIsOpen(prev => !prev)} className={`items-center md:flex ${isOpen ? "block" : "hidden" }`}>
                    {/*Mobile Menu open: "block", Menu closed: "hidden"*/} 
      <div  className="flex flex-col md:flex-row md:mx-6">
          <Link to="/" className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">Home</Link>
          <Link to="/shop" className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">Shop</Link>
          <Link to="/contact" className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">Contact</Link>
          <Link to="/about" className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">About</Link>
      </div>
                          {/* Shopping cart icon */}
      <div className="flex justify-center md:block">
          <Link to="/cart" className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
            <TiShoppingCart className="w-9 h-9"/>
            <span className="absolute top-1 left-0 p-1 text-xs text-white text-center bg-indigo-500 rounded-full w-5 h-5">{cartItem.length}</span>
          </Link>
      </div>

              {/* Toggle icon */}
      <div className="flex justify-center md:block">
          <span onClick = {()=>{setTheme(colorTheme)}}className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
            {colorTheme === 'dark' ? <BsMoon className="w-5 h-5 mt-3 md:ml-8 md:mt-0"/> : <HiLightBulb className="w-5 h-5 mt-3 md:ml-8 md:mt-0"/>}
          </span>
      </div>
    </div>
  )
}

export default NavLinks
