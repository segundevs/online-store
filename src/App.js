import React from 'react';
import Header from './components/Header';
import { fetchData } from './components/FetchData';
import { useQuery } from 'react-query';


function App() {

  const {data, isLoading, isError} = useQuery('products', () => fetchData('https://fakestoreapi.com/products'), {
      retry: false
  })

  return (
    <div className="App">
      <Header />
      {isLoading && <h3>Data is loading...</h3>}
      {isError && <h4>There was an error with that resource</h4>}
      {data && console.log(data)}
    </div>
  );
}

export default App;
