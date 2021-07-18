import React, { useContext } from 'react';
import Card from '../components/Card';
import { CartContext } from '../contexts/cartContext/CartContext';


const Cart = () => {
  const { cartItem } = useContext(CartContext);

  // const totalPrice = cartItem.reduce((acc, curr)=> acc + item.quantity * curr.price, 0);

  return (
    <>
    <h1 className="text-gray-700 dark:text-gray-200 text-center text-4xl my-6">{`You currently have ${cartItem.length} products in your cart`}</h1>
    {/* <h3>Total Price: ${totalPrice}</h3> */}
    
    <div className="lg:grid lg:grid-cols-3 lg:gap-4">
    {cartItem && cartItem.map((item) => (
      <Card item={item} key={item.id}/>
    ))} 
    </div>
    </>
  )
}

export default Cart
