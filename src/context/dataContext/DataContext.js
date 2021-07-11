import React, {createContext} from 'react';

export const DataContext = createContext();

const DataContextProvider = ({children}) => {

    const fetchData = async() => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
  }

  return (
    <DataContext.Provider value={{fetchData}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider
