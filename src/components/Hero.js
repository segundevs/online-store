import React from 'react';
import bg from '../img/bg.jpg';
import { useHistory } from 'react-router-dom';


const Hero = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/shop");
  }

  return (
     <div className="w-full bg-center bg-cover h-96" style={{backgroundImage: `url(${bg})`}}>
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Your one stop <span className="text-blue-400">Online Store</span></h1>
                    <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500" onClick={handleClick}>Start shopping</button>
                </div>
            </div>
        </div>
  )
}

export default Hero