import React from 'react';

const HomePage = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className=" mx-auto bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome to Invoice-N-WebUI</h2>
        
        <p className="text-gray-600 mb-6">
          A modern, user-friendly web interface for generating and managing professional invoices.
          Create, customize, and download invoices with ease using our intuitive design tools.
        </p>
        
        <div className="flex justify-center mt-8">
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 mr-4">
            Create Invoice
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
