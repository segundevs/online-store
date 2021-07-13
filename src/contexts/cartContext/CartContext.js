import React, { createContext } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

  const [cartItem, setCartItem] = useLocalStorage('inCart', []);
 // const [cartPrice, setCartPrice] = useLocalStorage('totalPrice', [])

  const addToCart = (item) => {
    const newCartItems = [...cartItem, item];
    setCartItem(newCartItems);
  };


  // const cartPriceList = (item) => {
  //   const newCartPrice = [...cartPrice, {item: item.price}];

  //   newCartPrice.reduce((acc, curr) => {
  //     if(curr){
  //       acc += newCartPrice
  //     } 
  //     return acc;  
  //   }, 0)

  //   setCartPrice(newCartPrice);
  //   console.log(setCartPrice(newCartPrice))
  // }
  
  const removeFromCart = (id) => {
    setCartItem(prevCartItem => prevCartItem.filter(item=> item.id !== id));
  };

  const isInCart = (id) => {
    return cartItem.some(item => item.id === id)
  };

  return (
    <CartContext.Provider value = {{ cartItem, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
