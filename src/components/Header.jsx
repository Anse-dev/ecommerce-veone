import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
    const { cart } = useCart();

    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="bg-gray-800 fixed   left-0 right-0 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">
                    E-Commerce
                </Link>
                <nav>
                    <Link to="/cart" className="relative">
                        Cart
                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 text-center">
                            {cartItemCount}
                        </span>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
