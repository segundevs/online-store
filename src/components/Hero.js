import React from 'react';
import { useQuery } from 'react-query';
import { fetchData } from './FetchData';


const Hero = () => {

  const {data} = useQuery('products', () => fetchData('https://fakestoreapi.com/products'), {
      retry: false
  })

  return (
    <section className="w-full h-40">
      <figure className="w-24 h-28 flex">
         {data && data.map((item) => (
        <img className="my-auto" src={item.image} alt="" />
      ))}
      </figure>
    </section>
  )
}

export default Hero