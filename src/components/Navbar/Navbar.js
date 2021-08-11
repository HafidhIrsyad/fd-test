import React from 'react';
import { FaBeer } from 'react-icons/fa';

function Navbar () {
  return (
    <header className="border-b md:flex md:items-center md:justify-around p-4 pb-0 shadow-lg md:pb-4 bg-white-500 text-white">
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <h1 className="leading-none text-2xl text-grey-darkest">
          <img src="http://app.femaledaily.com/wp-content/uploads/2018/07/FD-Logo-Pink.png" alt="fd-logo" className="w-32"/>
        </h1>
      </div>
      <input type="search"
        name="search"
        className="w-6/12 p-2 border border-black rounded-md text-gray-700 focus:outline-none"
        placeholder='Search products, articles, topics, brands, etc'
      />
      <button className="border border-black bg-white hover:bg-black hover:text-white text-black p-3">Login or SignUp</button>
      <FaBeer />
    </header>
  );
}

export default Navbar;