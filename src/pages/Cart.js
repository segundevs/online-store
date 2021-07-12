import React, { useContext } from 'react';
import Card from '../components/Card';
import { CartContext } from '../contexts/cartContext/CartContext';


const Cart = () => {

  const { cartItem } = useContext(CartContext);
  return (
    <>
    <h1 className="text-gray-700 dark:text-gray-200 text-center text-4xl my-6">{`You currently have ${cartItem.length} products in your cart`}</h1>
    <div className="lg:grid lg:grid-cols-3 lg:gap-4">
    {cartItem && cartItem.map((cartProp) => (
      <Card item={cartProp} key={cartProp.id}/>
    ))}
    </div>
    </>
  )
}

export default Cart
