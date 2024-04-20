import React from 'react';

const HotNewsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Hot News Today</h1>
      <p className="text-lg mb-4">
        Welcome to the Hot News Today page! Here you can find the latest and most trending news articles of the day.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">Nawaz sharif got kidnapped</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget justo auctor, commodo turpis vitae, gravida sapien.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">Jugan show started</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget justo auctor, commodo turpis vitae, gravida sapien.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">History</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget justo auctor, commodo turpis vitae, gravida sapien.</p>
        </div>
      </div>
    </div>
  );
};

export default HotNewsPage;
