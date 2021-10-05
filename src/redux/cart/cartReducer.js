
  import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT, DECREMENT, CLEAR_CART} from './cartTypes';

  const initialState = {
    cartItem: []
  }

  const cartReducer = (state = initialState, action) => {

    switch(action.type){
      case ADD_TO_CART:
        const item = state.cartItem.some(item => item.id === action.payload.id)
        if(item){
          return {
          //  cartItem: state.cartItem 
          cartItem: state.cartItem.filter(item => item.id !== action.payload.id)
        }
        }else{
          return {
            cartItem: [...state.cartItem, {...action.payload, quantity: 1}]
          }
        }

      case REMOVE_FROM_CART:
        return {
          cartItem: state.cartItem.length > 1 ? state.cartItem.filter(item => item.id !== action.payload) : state.cartItem
        }

      case INCREMENT:
        return {
          cartItem: state.cartItem.map(item => item.id === action.payload ? {...item, quantity: item.quantity + 1} : item)
        }

      case DECREMENT:
        return {
          cartItem: state.cartItem.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)
        }

      case CLEAR_CART:
        return {
          ...state,
          cartItem: []
        }

      default:
        return state
    }
  }

  export default cartReducer;