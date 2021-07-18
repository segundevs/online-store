import React, { createContext } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

  const [cartItem, setCartItem] = useLocalStorage('inCart', []);

  //Add item to cart
  const addToCart = (item) => {
    const newItems = {...item, quantity: 1}
    const newCartItems = [...cartItem, newItems];
    setCartItem(newCartItems);
  }

  //Remove item from cart
  const removeFromCart = (id) => {
    setCartItem(prevCartItem => prevCartItem.filter(item=> item.id !== id));
  };

  //Check if item is in cart
  const isInCart = (id) => {
    return cartItem.some(item => item.id === id)
  };

  const increment = (id) => {
    cartItem.map((item)=>(
      if(item.id === id){
        return {...item, quantity: item.quantity + 1}
      };  
    ))
  }


  return (
    <CartContext.Provider value = {{ cartItem, addToCart, removeFromCart, isInCart, increment }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
