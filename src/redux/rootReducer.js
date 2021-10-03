import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import dataReducer from './data/dataReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer
})

export default rootReducer;