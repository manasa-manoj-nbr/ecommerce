import React from 'react';

interface ProductProps {
  name: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, image }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-700">{price}</p>
    </div>
  );
};

export default ProductCard;
