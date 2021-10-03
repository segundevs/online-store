import { FETCH_LOADING, FETCH_SUCCESS, FETCH_ERROR } from './dataTypes';
import axios from 'axios';


export const fetchLoading = () => {
  return {
    type: FETCH_LOADING
  }
}

export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  }
}

export const fetchError = (err) => {
  return {
    type: FETCH_ERROR,
    payload: err
  }
}


export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchLoading);
      axios.get('https://fakestoreapi.com/products')
      .then(res => {
        const data = res.data;
        dispatch(fetchSuccess(data))
      })
      .catch(err => {
        const error = err.message;
        dispatch(fetchError(error))
      })
    }
  }


export const fetchFeatured = () => {
  return (dispatch) => {
    dispatch(fetchLoading);
      axios.get('https://fakestoreapi.com/products?limit=6')
      .then(res => {
        const data = res.data;
        dispatch(fetchSuccess(data))
      })
      .catch(err => {
        const error = err.message;
        dispatch(fetchError(error))
      })
  }
}