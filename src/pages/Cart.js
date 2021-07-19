import React, { useContext } from 'react';
import Card from '../components/Card';
import { CartContext } from '../contexts/cartContext/CartContext';


const Cart = () => {
  const { cartItem, increment, decrement } = useContext(CartContext);

  const totalPrice = cartItem.reduce((acc, curr)=> acc + curr.quantity * curr.price, 0);

  return (
    <>
    <h1 className="text-gray-700 dark:text-gray-200 text-center text-4xl my-6">{cartItem.length < 1 ? 'You currently do not have anything inside your cart' : `You currently have ${cartItem.length} products in your cart`}</h1>
    <h3>Total Price: ${totalPrice}</h3>
    
    <div className="lg:grid lg:grid-cols-3 lg:gap-4">
    {cartItem && cartItem.map((item) => (
      <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-6">
        <Card item={item} key={item.id}/>
          <div className="w-16 flex justify-between mx-auto my-1 bg-gray-800 text-white p-1 rounded-lg dark:bg-gray-300 dark:text-gray-800">
            <button type="button" onClick={()=>decrement(item.id)}>-</button>
            <h3>{item.quantity}</h3>
            <button type="button" onClick={()=>increment(item.id)}>+</button>
          </div>
      </div>
      
    ))} 
    </div>
    </>
  )
}

export default Cart
