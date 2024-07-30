import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return (
        <div className="border p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-200">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
            <h2 className="text-lg font-bold mb-2">{truncateText(product.title, 30)}</h2>
            <p className="text-gray-600 mb-4">{truncateText(product.description, 100)}</p>
            <span className="text-primary font-bold">${product.price}</span>
            <div className="flex justify-between mt-4">
                <Link to={`/product/${product.id}`} className="text-secondary hover:underline">View Details</Link>
                <button
                    onClick={() => addToCart(product)}
                    className="bg-secondary text-white p-2 rounded hover:bg-secondary-dark transition-colors duration-200">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
