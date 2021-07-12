import React, {createContext} from 'react';

export const DataContext = createContext();

const DataContextProvider = ({children}) => {

    const getAllProducts = async() => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
    }

    const getFeaturedProducts = async() => {
      const res = await fetch('https://fakestoreapi.com/products?limit=6');
      const data = await res.json();
      return data;
    }

  return (
    <DataContext.Provider value={{ getAllProducts, getFeaturedProducts }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider
