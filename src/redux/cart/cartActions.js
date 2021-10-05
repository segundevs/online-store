import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT, DECREMENT, CLEAR_CART} from './cartTypes';

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  }
}


export const increment = (id) => {
  return {
    type: INCREMENT,
    payload: id
  }
}

export const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: id
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}