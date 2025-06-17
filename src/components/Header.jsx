import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-cyan-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Invoice-N-WebUI</h1>
        <div className='flex gap-4 text-white'>
           <NavLink to="/" className={({ isActive }) => isActive ? "text-cyan-300" : "hover:text-cyan-300 transition-colors"}>Home</NavLink>
           <NavLink to="/generateinvoice" className={({ isActive }) => isActive ? "text-cyan-300" : "hover:text-cyan-300 transition-colors"}>Generate Invoice</NavLink>
           <NavLink to="/downloadinvoice" className={({ isActive }) => isActive ? "text-cyan-300" : "hover:text-cyan-300 transition-colors"}>Download Invoice</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
