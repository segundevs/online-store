import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import Card from '../components/Card';
import { DataContext } from '../context/dataContext/DataContext';

const Home = () => {
  const { fetchData } = useContext(DataContext);

  const {data, isLoading, isError} = useQuery('prod', fetchData);

  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-4">
      {data && data.map((item)=>(
        <Card data={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Home
