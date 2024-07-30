import React from 'react';
import { useCart } from '../context/CartContext';

const ProductDetail = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="border p-4  mt-20 rounded-lg shadow-lg bg-white">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <span className="text-primary font-bold">${product.price}</span>
            <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition duration-200"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetail;
