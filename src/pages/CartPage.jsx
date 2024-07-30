import React from 'react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();

    const handleQuantityChange = (id, e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity >= 0) {
            updateQuantity(id, newQuantity);
        }
    };

    const handleCheckout = () => {
        const deliveryAddress = prompt('Please enter your delivery address:');
        if (deliveryAddress) {
            toast.success('Order placed successfully!');

        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between items-center border-b py-4">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                                    <div>
                                        <h2 className="font-bold">{item.title}</h2>
                                        <p className="text-gray-600">${item.price} x</p>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="0"
                                            onChange={(e) => handleQuantityChange(item.id, e)}
                                            className="w-16 text-center border rounded"
                                        />
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
