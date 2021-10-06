// import React, { useContext } from 'react';
// import { CartContext } from '../contexts/cartContext/CartContext';
import {useSelector, useDispatch} from 'react-redux';
import { addToCart } from '../redux/cart/cartActions';

const Card = ({item}) => {

  const selector = useSelector(state => state.cart);

  const { cartItem } = selector;

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <div className="relative max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-6 h-auto">
      <img className="object-cover w-full h-48 mb-2" src={item.image} alt={item.category} />
        <div className="px-4 py-2 mb-6">
            <h1 className="text-2xl my-3 font-bold text-gray-800 uppercase dark:text-white">{item.title}</h1>
            {/* <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.description}</p> */}
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900 absolute bottom-0 right-0 left-0">
            <h1 className="text-lg font-bold text-white">${item.price}</h1>
            <button type="button" onClick={() => handleClick(item)} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            {cartItem.find(el => el.id === item.id) ? 'Remove from cart' : 'Add to cart'}
            </button>
        </div>
    </div>
  )
}

export default Card
