import React from 'react';
import garden from '../assets/gardeny.png'

const Home = () => {
    return (
      <div className="relative min-h-screen bg-gray-100">

        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm" 
          style={{ backgroundImage: `url(${garden})`}}
          
        ></div>

        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
          <div className="max-w-4xl w-full text-center bg-white bg-opacity-60 rounded-lg shadow-lg p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Fund-A-Box
            </h1>
            <p className="text-lg  mb-8"  >
              Empowering community involvement to make creating community gardens or personal gardens effortless and accessible
            </p>
            <div className="space-x-4">
              <a
                href="/guide"
                className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/feed"
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-md shadow-md hover:bg-green-600 hover:text-white transition-colors"
              >
                Explore the Feed
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;