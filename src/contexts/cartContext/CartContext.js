import React, { useState, createContext } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

  const [cartItem, setCartItem] = useLocalStorage('inCart', []);
  const [quantity, setQuantity] = useState(1);

  //Add item to cart
  const addToCart = (item) => {
    const newCartItems = [...cartItem, item];
    setCartItem(newCartItems);
  };

  //Remove item from cart
  const removeFromCart = (id) => {
    setCartItem(prevCartItem => prevCartItem.filter(item=> item.id !== id));
  };

  //Check if item is in cart
  const isInCart = (id) => {
    return cartItem.some(item => item.id === id)
  };

  //Manage the quantity of items is cart
  const increment = () => {
      setQuantity(quantity + 1);
  }

  const decrement = () => {
      setQuantity(quantity - 1);
  }

  return (
    <CartContext.Provider value = {{ cartItem, quantity, addToCart, removeFromCart, isInCart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
