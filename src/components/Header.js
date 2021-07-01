import React from 'react';
 import {TiShoppingCart} from 'react-icons/ti';

const Header = () => {
  return (
    <header className="w-full border-b-2 border-purple-900 bg-purple-50">
      <nav className="max-w-screen-lg mx-auto flex items-center justify-between py-4">
        <h3 className="text-purple-900 font-extrabold">Online shop</h3>
        <TiShoppingCart className="text-purple-900" />
      </nav>  
    </header>
    
  )
}

export default Header
