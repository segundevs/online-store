import React, { useContext } from 'react';
import { CartContext } from '../contexts/cartContext/CartContext';

const Card = ({item}) => {

  const { addToCart, isInCart, removeFromCart } = useContext(CartContext);

  const handleClick = (item) => {
    if(isInCart(item.id)){
      removeFromCart(item.id)
    }else{
      addToCart(item)
    }
  }

  return (
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-6">
        <div className="px-4 py-2">
            <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">{item.title}</h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
        </div>

        <img className="object-cover w-full h-48 mt-2" src={item.image} alt="NIKE AIR" />

        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">${item.price}</h1>
            <button onClick={() => handleClick(item)} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">{isInCart(item.id) ? 'Remove from Cart' : 'Add to cart'}</button>
        </div>
    </div>
  )
}

export default Card
