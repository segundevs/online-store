import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

  const [cartItem, setCartItem] = useState([]);
  const [cartPrice, setCartPrice] = useState([])

  const addToCart = (item) => {
    const newCartItems = [...cartItem, item];
    setCartItem(newCartItems);
  };

  const cartPriceList = (item) => {
    const newCartPrice = [...cartPrice, {item: item.price}];
    setCartPrice(newCartPrice);
    console.log(newCartPrice)
  }
  const removeFromCart = (id) => {
    setCartItem(prevCartItem => prevCartItem.filter(item=> item.id !== id));
  };

  const isInCart = (id) => {
    return cartItem.some(item => item.id === id)
  };

  return (
    <CartContext.Provider value = {{ cartItem, addToCart, removeFromCart, isInCart, cartPriceList}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
