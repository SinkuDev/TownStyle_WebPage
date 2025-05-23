import React from 'react';

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: "$19.99",
    image: "https://via.placeholder.com/300x300.png?text=White+T-Shirt",
  },
  {
    id: 2,
    name: "Premium Black Tee",
    price: "$24.99",
    image: "https://via.placeholder.com/300x300.png?text=Black+Tee",
  },
  {
    id: 3,
    name: "Graphic Cotton Shirt",
    price: "$29.99",
    image: "https://via.placeholder.com/300x300.png?text=Graphic+Shirt",
  },
  {
    id: 4,
    name: "Summer V-Neck",
    price: "$21.99",
    image: "https://via.placeholder.com/300x300.png?text=V-Neck",
  },
];

const ShoppingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our T-Shirts Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl p-4 transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h2>
            <p className="text-pink-600 font-bold mb-4">{product.price}</p>
            <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
