import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi';
import {MdClose} from 'react-icons/md';
import NavLinks from './NavLinks';



const Header = ({value, setValue}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div>
                    <Link to="/" className="text-2xl font-bold text-blue-400 dark:text-white lg:text-3xl hover:text-blue-500 dark:hover:text-gray-300">My store</Link>
                </div>
                
                {/*Mobile menu button*/}
                <div className="flex md:hidden" onClick={() => setIsOpen(prev => !prev)}>
                   <button type="button" className="text-3xl text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        {!isOpen ? <BiMenuAltLeft /> : <MdClose />}
                    </button>
                </div>
            </div>

            <select className="w-56 bg-gray-200 outline-none" value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
            {/*Mobile Menu open: "block", Menu closed: "hidden"*/} 
            <NavLinks isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    </header>
    
  )
}

export default Header
