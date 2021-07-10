import React from 'react';
import { useQuery } from 'react-query';
import Card from '../components/Card';


const fetchData = async() => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
}

const Home = () => {

  const {data, isLoading} = useQuery('prod', fetchData);

  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-4">
      {/* {data && console.log(data)} */}
      {isLoading && <h3>Data is loading</h3>}
      {data && data.map((item)=>(
        <Card data={item} />
      ))}
    </div>
  )
}

export default Home
