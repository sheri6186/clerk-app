import React from 'react';

const socialpage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Social News</h1>
      <p className="text-lg mb-4">
        Welcome to the Social News page! Here you can find the latest updates and information related to Social media.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">Facebook was closed for one day</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget justo auctor, commodo turpis vitae, gravida sapien.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">new feature unlocked</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget justo auctor, commodo turpis vitae, gravida sapien.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">iphone 16 has launched</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget justo auctor, commodo turpis vitae, gravida sapien.</p>
        </div>
      </div>
    </div>
  );
};

export default socialpage;
