import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Invoice-N-WebUI | An Open Source Project</p>
      </div>
    </footer>
  );
};

export default Footer;
