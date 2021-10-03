import { FETCH_LOADING, FETCH_SUCCESS, FETCH_ERROR } from './dataTypes';

const initialState = {
  loading: true,
  error: '',
  data: []
}

const dataReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_LOADING:
      return {
        loading: false,
      }
    case FETCH_SUCCESS:
      return {
        loading: false,
        error: '',
        data: action.payload
      }
    case FETCH_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: []
      }
    default:
      return state
  }
}

export default dataReducer;
