import React from 'react';

const SportPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Sports News</h1>
      <p className="text-lg mb-4">
        Welcome to the Sports News page! Here you can find the latest updates and information related to sports.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">win the car race competition</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget justo auctor, commodo turpis vitae, gravida sapien.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">cricket</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget justo auctor, commodo turpis vitae, gravida sapien.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">football</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget justo auctor, commodo turpis vitae, gravida sapien.</p>
        </div>
      </div>
    </div>
  );
};

export default SportPage;
