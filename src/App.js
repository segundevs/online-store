import React from 'react';
import Header from './components/Header';
import { fetchData } from './components/FetchData';
import { useQuery } from 'react-query';


function App() {

  const {data} = useQuery('products', () => fetchData('https://fakestoreapi.com/products'), {
      retry: false
  })

  return (
    <div className="App">
      <Header />
      {data && console.log(data)}
    </div>
  );
}

export default App;
