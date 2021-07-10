import React from 'react';

const Card = ({data}) => {
  return (
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-8">
        <div className="px-4 py-2">
            <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">{data.title}</h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{data.description}</p>
        </div>

        <img className="object-cover w-full h-48 mt-2" src={data.image} alt="NIKE AIR" />

        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">${data.price}</h1>
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
        </div>
    </div>
  )
}

export default Card
